import { TARGETS, AI, ACTIONS, ACTIONS_PARAMS } from "../../content/constants";

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function targetUnit(state, targetId) {
  const skill = ACTIONS_PARAMS[state.currentAction];
  const damage = randomNumber(skill.minDamage, skill.maxDamage);
  const participants = state.participants.map((participant) => {
    if (participant.id === targetId) {
      if (participant.currentHP - damage <= 0) {
        participant.currentHP = 0;
        participant.dead = true;
      } else {
        participant.currentHP -= damage;
      }
    }
    return participant;
  });
  return participants;
}

function enemyTurn(state) {
  const enemy = state.turnCharacter;
  const party = state.participants.filter(
    (participant) => participant.id < 1000
  );
  let newParticipants;
  let target = { currentHP: 999 };

  if (enemy.ai === AI.WEAKEST) {
    party.forEach((ally) => {
      if (!ally.dead) {
        if (ally.currentHP < target.currentHP) target = ally;
      }
    });

    newParticipants = targetUnit(
      { ...state, currentAction: enemy.attacks[0] },
      target.id
    );
  }

  return {
    ...state,
    turn: state.turn + 1,
    currentAction: enemy.attacks[0],
    participants: [...newParticipants],
    turnCharacter: newParticipants[0],
    animationTarget: target.id,
  };
}

function nextTurn(state) {
  const participants = state.participants;
  participants.push(participants.shift());

  while (participants[0].dead) {
    participants.push(participants.shift());
  }

  const newState = {
    ...state,
    participants,
    currentAction: ACTIONS.NONE,
    turn: state.turn + 1,
    turnCharacter: participants[0],
    animationTarget: null,
  };

  return { ...newState };
}

const initialState = {
  turn: 1,
  targets: TARGETS.NONE,
  participants: [],
  turnCharacter: null,
  currentAction: ACTIONS.NONE,
  animationTarget: null,
};

const combat = (state = initialState, action) => {
  switch (action.type) {
    case "START_COMBAT": {
      const { party, enemies } = action.payload;
      const orderedParty = party.map((character, index) => {
        return { ...character, order: index };
      });

      const participants = [...orderedParty, ...enemies];
      participants.sort((a, b) => {
        return b.speed - a.speed;
      });

      const turnCharacter = participants[0];

      return { ...state, participants, turnCharacter };
    }

    case "SET_ACTION": {
      const currentAction = action.payload;
      const { targets } = ACTIONS_PARAMS[currentAction];
      return { ...state, currentAction, targets };
    }

    case "START_ANIMATION": {
      const targetId = action.payload;

      return {
        ...state,
        animationTarget: targetId,
      };
    }
    case "COMPLETE_ACTION": {
      const targetId = action.payload;
      const newParticipants = targetUnit(state, targetId);

      return {
        ...state,
        participants: newParticipants,
        targets: TARGETS.NONE,
        animationTarget: targetId,
      };
    }

    case "ENEMY_TURN": {
      return enemyTurn(state);
    }

    case "NEXT_TURN": {
      return nextTurn(state);
    }

    default:
      return state;
  }
};

export default combat;
