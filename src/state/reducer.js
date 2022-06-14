import constants from './constants';
export const reducer =(state,action)=>{
    const{type,payload}= action;
    switch(type){
        case constants.SET_PLAYER_NAME:{
            return {
                ...state,
                playerName:payload
            }
        }
        case constants.SET_LEVEL:{
            return {
                ...state,
                level:payload
            }
        }
        case constants.SET_CATEGORIES:{
            return {
                ...state,
                categorylist:payload
            }
        }
        case constants.SET_SELECTED_CATEGORY:{
            return {
                ...state,
                SelectedCategory:[...state.SelectedCategory,payload]
            }
        }
        case constants.SET_CURRENT_CATEGORY_QUESTIONS:{
            return {
                ...state,
                currentCategoryQuestions:payload
            }
        }
        case constants.SET_QUESTION_NO:{
            return {
                ...state,
                questionNo:payload
            }
        }
        case constants.SET_TIMER:{
            return {
                ...state,
                timer:payload
            }
        }
        case constants.INCREMENT_CORRECT_QUESTION_NO:{
            return {
                ...state,
                correctQuestionNo:state.correctQuestionNo+1
            }
        }
        case constants.INCREMENT_WRONG_QUESTION_NO:{
            return {
                ...state,
                wrongQuestionNo:state.wrongQuestionNo+1
            }
        }
        case constants.INCREMENT_SKIP_QUESTION_NO:{
            return {
                ...state,
                skipQuestionNo:state.skipQuestionNo+1
            }
        }
        case constants.RESET_SELECTED_CATEGORY:{
            return {
                ...state,
                SelectedCategory:[]
            }
        }
        case constants.RESET_CORRECT_ANSWER:{
            return{
                ...state,
                correctQuestionNo:0
            }
        }
        case constants.RESET_WRONG_ANSWER:{
            return{
                ...state,
                wrongQuestionNo:0
            }
        }
        case constants.RESET_SKIP_ANSWER:{
            return{
                ...state,
                skipQuestionNo:0
            }
        }
        default:{
        }
    }
}