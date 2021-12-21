const initialState = { cities: [] };


const citiesReducer = (state = initialState, action) => {
  switch(action.type) {

     case 'FETCH/get_list_success':
      return{
                 ...state,
                cities: action.payload,
                //loading: false
            }
 
    default:
    return state
  }
};


export { citiesReducer };

