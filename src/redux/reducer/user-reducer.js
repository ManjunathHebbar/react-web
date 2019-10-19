
const initial = {
  userPostDetails: [],
  comment: []
}

const userPostReducer = (state = initial, action) => {
   // Reducer for user detail
    switch (action.type) {
      case 'GET_USER_DETAIL':
      return {
        userPostDetails: action.payload
     }
     default:
      return state
    }
 }


export default userPostReducer;

