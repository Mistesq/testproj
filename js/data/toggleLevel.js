import {initialState, AnswerTypes} from "../constants";

const toggleLevel = ( state) => {
  let {level, lives, answers} = state;
  level++;

  return {level, lives, ...answers};
};

export default toggleLevel;
