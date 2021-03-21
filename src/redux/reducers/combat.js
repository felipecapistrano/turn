import { TARGETS, AI, ACTIONS, ACTIONS_PARAMS } from "../../content/constants";

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

function target(state, targetId) {
  const skill = ACTIONS_PARAMS[state.currentAction];
  const damage = randomNumber(skill.minDamage, skill.maxDamage);
  const participants = state.participants.map((participant) => {
    if (participant.id === targetId) {
      participant.currentHP -= damage;
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

  if (enemy.ai === AI.WEAKEST) {
    let weakest = party[0];
    party.forEach((ally) =>
      ally.currentHP < weakest.currentHP ? (weakest = ally) : null
    );
    newParticipants = target(
      { ...state, currentAction: enemy.attacks[0] },
      weakest.id
    );
  }

  newParticipants.push(newParticipants.shift());

  return {
    ...state,
    currentAction: ACTIONS.NONE,
    turn: state.turn + 1,
    participants: [...newParticipants],
    turnCharacter: newParticipants[0],
  };
}

function nextTurn(state) {
  const participants = state.participants;
  participants.push(participants.shift());
  let newState = {
    ...state,
    participants,
    turn: state.turn + 1,
    turnCharacter: participants[0],
  };

  if (newState.turnCharacter.id > 1000) {
    newState = enemyTurn(newState);
  }
  return { ...newState };
}

const initialState = {
  turn: 1,
  targets: TARGETS.NONE,
  participants: [],
  turnCharacter: null,
  currentAction: ACTIONS.NONE,
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
      if (turnCharacter.id > 1000)
        return enemyTurn({ ...state, participants, turnCharacter });

      return { ...state, participants, turnCharacter };
    }
    case "SET_ACTION": {
      const currentAction = action.payload;
      const { targets } = ACTIONS_PARAMS[currentAction];
      return { ...state, currentAction, targets };
    }
    case "COMPLETE_ACTION": {
      const targetId = action.payload;
      const newParticipants = target(state, targetId);

      return nextTurn({
        ...state,
        participants: newParticipants,
        currentAction: ACTIONS.NONE,
        targets: TARGETS.NONE,
      });
    }
    default:
      return state;
  }
};

export default combat;
