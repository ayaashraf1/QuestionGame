import React,{createContext, useContext,useReducer} from "react";
import {reducer} from './reducer';
const GameContext = createContext("");
const GameDispatchContext = createContext("");

const gameInitialState ={
    playerName:'',
    questionNo:0,
    timer:0,
    level:'',
    SelectedCategory:[],
    categorylist:[],
    currentCategoryQuestions:[],
    correctQuestionNo:0,
    wrongQuestionNo:0,
    skipQuestionNo:0
}
export const useGameState = () => {
    const gameState = useContext(GameContext);
    return gameState;
};
export const useGameDispatch = () =>{
    const gameDispatch = useContext(GameDispatchContext);
    return gameDispatch;
}
export const ContextProvider =({children}) =>{
 const [state, dispatch] = useReducer(reducer, gameInitialState);
  return (
    <GameContext.Provider value={state}>
      <GameDispatchContext.Provider value={dispatch}>{children}</GameDispatchContext.Provider>
    </GameContext.Provider>
  );
}
