import { 
    SET_LOADINGMOVIEINFO,
    SET_LOADINGDETAILPAGE,
    GET_MOVIEINFO,

  } from '../actions/todo-action'
  
  // Define your state here
  const initialState = {
    loading: false,
    todos: [],
    movieinfor: ''
  }
  
  // This export default will control your state for your application
  export default(state = initialState, {type, payload}) => {
    switch(type) {
      // Set loading
      case SET_LOADINGDETAILPAGE:
        return {
          ...state,
      loading: true
        }
        // Set loading
      case SET_LOADINGMOVIEINFO:
        return {
          ...state,
      loading: true
        }
      // Get todos
      case GET_MOVIEINFO:
        return {
          ...state,
          todos: payload,
          loading: false
        }
      // Return default state if you didn't match any case
      default:
        return state
    }
  }