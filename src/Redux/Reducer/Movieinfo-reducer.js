import { 
    SET_LOADINGMOVIEINFO,
    GET_MOVIEINFO,

  } from '../actions/todo-action'
  
  // Define your state here
  const initialState = {
    loading: false,
    todos: [],
    Movieinfo: ''
  }
  
  // This export default will control your state for your application
  export default(state = initialState, {type, payload}) => {
    switch(type) {
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