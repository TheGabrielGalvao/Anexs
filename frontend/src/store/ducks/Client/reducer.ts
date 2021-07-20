import { Reducer } from "redux"
import { EClientActions, IClientState } from "./types"


const INITIAL_STATE: IClientState = {
    data: [],
    loading: false,
    error: false
}

export const clientReducer: Reducer<IClientState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EClientActions.LOAD_REQUEST:
            return { ...state, loading: true }
        case EClientActions.LOAD_SUCCESS:
            console.log(action.data)
            return {
                ...state, loading: false, error: false, data: action.data,
            }
        case EClientActions.LOAD_FAILURE:
            return {
                ...state, loading: false, error: true, data: [],
            }

        case EClientActions.SAVE_REQUEST:
            return { ...state, loading: true }
        case EClientActions.SAVE_SUCCESS:
            state.data.push(action.data)
            return {
                ...state, loading: false, error: false, data: action.data,
            }
        case EClientActions.SAVE_FAILURE:
            return {
                ...state, loading: false, error: true
            }

        case EClientActions.DELETE_REQUEST:
            return { ...state, loading: true }
        case EClientActions.DELETE_SUCCESS:
            state.data.splice(action.data)
            return {
                ...state, loading: false, error: false, data: action.data,
            }
        case EClientActions.DELETE_FAILURE:
            return {
                ...state, loading: false, error: true
            }

        default:
            return state
    }
}

