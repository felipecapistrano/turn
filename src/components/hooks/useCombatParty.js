import { useSelector } from "react-redux";

export default function useCombatParty() {
  const participants = useSelector((state) => state.combat.participants);
  const party = participants.filter((participant) => participant.id < 1000);
  party.sort((a, b) => {
    return a.order - b.order;
  });
  return party;
}
