import axios from 'axios';

export const getQuestionsService = (categoryId,level)=>{
    return axios('https://opentdb.com/api.php?amount=3&category='+categoryId+'&difficulty='+level,{
        method: 'GET',
        token: sessionStorage.getItem('token'),
      });
}