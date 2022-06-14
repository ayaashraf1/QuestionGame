import axios from 'axios';

export const getToken = () =>{
    return axios({
        method: 'get',
        url: 'https://opentdb.com/api_token.php?command=request',
      });
}