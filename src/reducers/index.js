import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import MainScreenReducer from './MainScreenReducer'



export default combineReducers({
    login: LoginReducer,
    mainScreen: MainScreenReducer
    
})
