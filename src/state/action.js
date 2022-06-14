import { getCategories } from '../services/getCategories';
import { getQuestionsService } from '../services/getQuestionsService';
import {getToken} from '../services/getToken';
import { globalConfig } from '../shared/globalConfig';
import { millisToMinutesAndSeconds } from '../shared/utils';
import { resetCorrectAnswer, resetSelectedCategory, resetSkipAnswer, resetWrongAnswer, setCategories, setCurrentCategoryQuestions, setLevel, setPlayerName, setQuestionNo, setSelectedCategory, setTimer } from "./setter";

export const requestToken =async() =>{
     await getToken().then(function (response) {
            sessionStorage.setItem('token',response.data.token);
        });
}
export const getListOfCategories = async(dispatch) =>{
   await getCategories().then(async(response)=>{
        await dispatch(setCategories(response.data.trivia_categories));
    })
}
export const updateState=async(name,level,timer,dispatch)=>{
  await dispatch(setPlayerName(name));
  await dispatch(setLevel(level));
  await dispatch(setTimer(timer));
}
export const getQuestions =async(categoryId,level,dispatch)=>{
    dispatch(setSelectedCategory(parseInt(categoryId)));
    await getQuestionsService(categoryId,level).then(async(response)=>{
      //add all answers in one array
      let allQuestions = response.data.results.map((question) =>{
        if(question.type === 'multiple'){
          let allAnswers= question.incorrect_answers.map((answer)=>{
            return {"answer":answer,"isTrue":"false"};
          })
          allAnswers.push({"answer":question.correct_answer,"isTrue":"true"});
          return question.allAnswers = allAnswers;
        }
        return question;
      });
      console.log(allQuestions);
      await dispatch(setCurrentCategoryQuestions(response.data.results));
    })
}
export const resetState = async(dispatch) =>{
  await dispatch(setTimer(0));
  await dispatch(setQuestionNo(0));
  await dispatch(setCurrentCategoryQuestions([]));
  await dispatch(setPlayerName(''));
  await dispatch(setLevel(''));
  await dispatch(resetSelectedCategory([]));
  await dispatch(resetCorrectAnswer(0));
  await dispatch(resetWrongAnswer(0));
  await dispatch(resetSkipAnswer(0));
  globalConfig.gameStartIn = '';
  globalConfig.gameEndIn = '';
}
export const calculateGameTime = () =>{
 const timeInMilisec =  globalConfig.gameEndIn - globalConfig.gameStartIn;
 return millisToMinutesAndSeconds(timeInMilisec);
}