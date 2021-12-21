// import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';

//Fetch actions 
const fetchCities = () => {
return async dispatch =>  {
  const  response = axios.get(`http://localhost:5000/cities/all`);
  const data = await response;
  
  dispatch(actionFetchSuccess(data.data));
}};


// const actionFetchInit = () => {
//   return {
//     type: 'FETCH/fetch_init',
//   }
// };

 const actionFetchSuccess = (data)=> {
  return {
    type: 'FETCH/get_list_success',
    payload: {
      data
    }
  }
};

 
//   const actionFetchFailure = (msg, status, id) => {
//   return {
//     type: 'ERROR/get_list_failure',
//     payload: {
//        msg, status, id 
//    }
//   }
// };


export { fetchCities };