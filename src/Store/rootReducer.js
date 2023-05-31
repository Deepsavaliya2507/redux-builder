import First from "./First/reducer";
const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  First,
});

export default rootReducer;