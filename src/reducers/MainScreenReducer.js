import {OPEN_MODULE} from '../actions/types'
import {Actions} from 'react-native-router-flux'
const INITIAL_STATE= {
    text:'Home'
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case OPEN_MODULE:
            if (action.payload!=='Home'){
                Actions.ModuleScreen();
            }
            
            return {text: action.payload}

        default:
            return state
    }
}