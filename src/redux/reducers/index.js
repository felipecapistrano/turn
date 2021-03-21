import { combineReducers } from "redux";

import { default as combat } from "./combat";
import { default as party } from "./party";

const allReducers = combineReducers({ combat, party });

export default allReducers;
