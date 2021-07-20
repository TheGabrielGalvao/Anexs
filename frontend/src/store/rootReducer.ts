import { combineReducers } from 'redux'
import { clientReducer } from './ducks'

export default combineReducers({
    client: clientReducer
})