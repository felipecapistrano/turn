import { ACTIONS, AI } from "../../constants";

const boss1 = {
  id: 1001,
  ai: AI.WEAKEST,
  portrait:
    "https://www.hireanillustrator.com/i/images/2018/07/Melanie_gnomeportrait_finalsm.jpg",
  sprite: "https://us.v-cdn.net/5022341/uploads/editor/8v/1mjocz4impqq.png",
  name: "Boss",
  currentHP: 80,
  maxHP: 80,
  speed: 6,
  attacks: [ACTIONS.ATTACK],
};

export default boss1;
