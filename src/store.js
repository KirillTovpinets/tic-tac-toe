import { createStore } from 'redux';
import cobinedReducer from './reducers';
export default createStore(cobinedReducer);