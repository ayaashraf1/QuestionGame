import axios from 'axios';

export const getCategories =() =>{
    return axios('https://opentdb.com/api_category.php',{
        method: 'GET',
        token: sessionStorage.getItem('token'),
      })
}