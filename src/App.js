import { useDispatch } from "react-redux";

import { addCharacters } from "./redux/actions";
import { placeholder1, placeholder2, placeholder3 } from "./content/characters/Party";

import Combat from "./components/Combat";
import "./global.css";

function App() {
  const dispatch = useDispatch();

  dispatch(addCharacters([placeholder1, placeholder2, placeholder3]));

  return (
    <>
      <div className="game">
        <Combat />
      </div>
    </>
  );
}

export default App;
