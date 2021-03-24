import { useDispatch } from "react-redux";

import { completeAction, nextTurn } from "../../redux/actions";

export default function useAction() {
  const dispatch = useDispatch();
  const action = (target, time) => {
    dispatch(completeAction(target));
    setTimeout(() => dispatch(nextTurn()), time);
  };

  return action;
}
