import {
    EMAIL_CHANGE,
    PASSWORD_CHANGE,
    LOGIN_BUTTON_PRESSED,
    OPEN_MODULE
} from './types'


export const EmailChangeAction = (email) => {
    return {
        type:EMAIL_CHANGE,
        payload: email
    }
}

export const PasswordChangeAction = (password) => {
    return {
        type:PASSWORD_CHANGE,
        payload: password
    }
}

export const LoginButtonAction = () => {
    return {
        type:LOGIN_BUTTON_PRESSED
    }
}

export const OpenModuleAction = (module) => {
    return {
        type: OPEN_MODULE,
        payload: module
    }
}
