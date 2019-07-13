import {
    EMAIL_CHANGE,
    PASSWORD_CHANGE,
    LOGIN_BUTTON_PRESSED
} from '../actions/types';
import {Actions} from 'react-native-router-flux'

import data from '../auth.json'


INITIAL_STATE = {
    email: '',
    password:'',
    loggedin:false
}

export default (state=INITIAL_STATE, action) => {


    switch (action.type){
        case EMAIL_CHANGE:
            return {
                ...state,
                email:action.payload
            }

        case PASSWORD_CHANGE:
                return {
                    ...state,
                    password:action.payload
                }
        
        case LOGIN_BUTTON_PRESSED:
            var loggedin = 'Email not recognized'
            var email = state.email
            var password = ""

            if ((state.email === data.email)){
                loggedin = 'Incorrect Password'
                if (state.password === data.password){
                    loggedin='passed'
                    Actions.main()
                }
            }

            return {
                email: email,
                password: password,
                loggedin:loggedin
            }

        default:
            return state
    }
    
}