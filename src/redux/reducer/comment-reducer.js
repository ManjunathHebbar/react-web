const initial = {
    commentDetails : []
}

const commentReducer = (state = initial, action) => {
     switch (action.type) {
       case 'GET_COMMENT_DETAIL':
       return {
         commentDetails : action.payload
      }
      default:
       return state
     }
}
  
export default commentReducer;