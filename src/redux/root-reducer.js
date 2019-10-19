import { combineReducers } from 'redux';
import userPostReducer from '../redux/reducer/user-reducer';
import commentReducer from '../redux/reducer/comment-reducer'

export default combineReducers({
    user: userPostReducer,
    comment: commentReducer,
});