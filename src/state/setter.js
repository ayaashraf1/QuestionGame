import constants from "./constants"

export const setPlayerName = (payload) =>{
    return {
        payload,
        type:constants.SET_PLAYER_NAME
    }
}
export const setLevel = (payload) =>{
    return {
        payload,
        type:constants.SET_LEVEL
    }
}
export const setCategories = (payload) =>{
    return {
        payload,
        type:constants.SET_CATEGORIES
    }
}
export const setSelectedCategory = (payload)=>{
    return {
        payload,
        type:constants.SET_SELECTED_CATEGORY
    }
}
export const setCurrentCategoryQuestions =(payload)=>{
    return {
        payload,
        type:constants.SET_CURRENT_CATEGORY_QUESTIONS
    }
}
export const setQuestionNo =(payload)=>{
    return {
        payload,
        type:constants.SET_QUESTION_NO
    }
}
export const setTimer =(payload)=>{
    return {
        payload,
        type:constants.SET_TIMER
    }
}
export const incrementCorrectQuestionNo =(payload)=>{
    return {
        payload,
        type:constants.INCREMENT_CORRECT_QUESTION_NO
    }
}
export const incrementWrongQuestionNo =(payload)=>{
    return {
        payload,
        type:constants.INCREMENT_WRONG_QUESTION_NO
    }
}
export const incrementSkipQuestionNo =(payload)=>{
    return {
        payload,
        type:constants.INCREMENT_SKIP_QUESTION_NO
    }
}
export const resetSelectedCategory = (payload) =>{
    return {
        payload,
        type:constants.RESET_SELECTED_CATEGORY
    }
}
export const resetCorrectAnswer = (payload)=>{
    return {
        payload,
        type:constants.RESET_CORRECT_ANSWER
    }
}
export const resetWrongAnswer = (payload)=>{
    return {
        payload,
        type:constants.RESET_WRONG_ANSWER
    }
}
export const resetSkipAnswer = (payload)=>{
    return {
        payload,
        type:constants.RESET_SKIP_ANSWER
    }
}