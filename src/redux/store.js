import combineReducers from './root-reducer'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
export default function configureStore(initialState={}) {
 return createStore(
  combineReducers,
  initialState,
   applyMiddleware(thunk)
   
 );
};