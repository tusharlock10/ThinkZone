import {
    EMAIL_CHANGE,
    PASSWORD_CHANGE,
    LOGIN_BUTTON_PRESSED
} from '../actions/types'
import data from '../auth.json'


INITIAL_STATE = {
    email: '',
    password:'',
    loggedin:false
}

export default (state=INITIAL_STATE, action) => {

    switch (action.type){
        case EMAIL_CHANGE:
            console.log(action.payload)
            return {
                ...state,
                email:action.payload
            }

        case PASSWORD_CHANGE:
                console.log(action.payload)
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