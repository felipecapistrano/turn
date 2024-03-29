import {
  TARGETS,
  AI,
  ACTIONS,
  ACTIONS_PARAMS,
  SKILL_TYPES,
} from "../../content/constants";

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function targetUnit(state, targetId) {
  const turnCharacter = state.turnCharacter;

  const skill = ACTIONS_PARAMS[state.currentAction];
  const skillType = skill.type;
  const roll = randomNumber(skill.minDamage, skill.maxDamage);

  const participants = state.participants.map((participant) => {
    if (participant.id === turnCharacter.id) {
      participant.currentMP -= skill.cost;
    }
    if (participant.id === targetId) {
      if (skillType === SKILL_TYPES.DAMAGE) {
        if (participant.currentHP - roll <= 0) {
          participant.currentHP = 0;
          participant.dead = true;
        } else {
          participant.currentHP -= roll;
        }
      } else if (skillType === SKILL_TYPES.HEAL) {
        if (participant.currentHP + roll >= participant.maxHP) {
          participant.currentHP = participant.maxHP;
        } else {
          participant.currentHP += roll;
        }
      }
    }
    return participant;
  });
  return [participants, { target: targetId, damage: roll, type: skillType }];
}

function enemyTurn(state) {
  const enemy = state.turnCharacter;
  const party = state.participants.filter(
    (participant) => participant.id < 1000
  );
  let newParticipants;
  let animation;
  let target = { currentHP: 999 };

  if (enemy.ai === AI.WEAKEST) {
    party.forEach((ally) => {
      if (!ally.dead) {
        if (ally.currentHP < target.currentHP) target = ally;
      }
    });

    [newParticipants, animation] = targetUnit(
      { ...state, currentAction: enemy.skills[0] },
      target.id
    );
  }

  return {
    ...state,
    turn: state.turn + 1,
    currentAction: enemy.skills[0],
    participants: [...newParticipants],
    turnCharacter: newParticipants[0],
    animation,
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
    animation: { target: null, damage: null, type: null },
  };

  return { ...newState };
}

const initialState = {
  turn: 1,
  targets: TARGETS.NONE,
  participants: [],
  turnCharacter: null,
  currentAction: ACTIONS.NONE,
  animation: { target: null, damage: null, type: null },
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

    case "COMPLETE_ACTION": {
      const targetId = action.payload;
      const [newParticipants, animation] = targetUnit(state, targetId);

      return {
        ...state,
        participants: newParticipants,
        targets: TARGETS.NONE,
        animation,
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
