import { combineReducers } from 'redux'
import { clientReducer } from './ducks'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    client: clientReducer,
    form: formReducer
})