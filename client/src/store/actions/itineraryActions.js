// import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';


const url = 'http://localhost:5000/'
//Fetch actions 
const fetchItineraries = () => {
return async dispatch =>  {
  const  response = axios.get(`${url}itineraries/all`);
  const data = await response;
  
  dispatch(actionFetchSuccess(data.data));
}};

const fetchItineraryCity = (city) => {
  return async dispatch => {
    const response = axios.get(`${url}inineraries/${city}`);
    const fetchedCity = await response;

    dispatch(actionFetchSuccess(fetchedCity.data));
  }
};

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


export { fetchItineraries, fetchItineraryCity };