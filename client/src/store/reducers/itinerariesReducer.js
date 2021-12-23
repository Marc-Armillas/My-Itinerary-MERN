const initialState = { itineraries: [] };


const itinerariesReducer = (state = initialState, action) => {
  switch(action.type) {

     case 'FETCH/get_list_success':
      return{
                 ...state,
                itineraries: action.payload,
                //loading: false
            }
 
    default:
    return state
  }
};


export { itinerariesReducer };
