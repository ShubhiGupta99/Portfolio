import WorkReducer from './3Work/WorkReducer';
import HomeReducer from './HomeScreen/HomeReducer';
// import counter from './counter'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    WorkReducer,
    HomeReducer
})

export default rootReducer;