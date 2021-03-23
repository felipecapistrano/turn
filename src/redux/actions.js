// COMBAT

export const startCombat = (party, enemies) => {
  return {
    type: "START_COMBAT",
    payload: { party, enemies },
  };
};

export const setAction = (currentAction) => {
  return {
    type: "SET_ACTION",
    payload: currentAction,
  };
};

export const completeAction = (targetId) => {
  return {
    type: "COMPLETE_ACTION",
    payload: targetId,
  };
};

export const enemyTurn = () => {
  return {
    type: "ENEMY_TURN",
  };
};

// PARTY

export const addCharacters = (characters) => {
  return {
    type: "ADD_CHARACTERS",
    payload: characters,
  };
};
