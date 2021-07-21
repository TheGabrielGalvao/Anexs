import { Reducer } from "redux"
import { EClientActions, IClientState } from "./types"


const INITIAL_STATE: IClientState = {
    data: [],
    loading: false,
    error: false
}

export const clientReducer: Reducer<IClientState> = (state = INITIAL_STATE, action) => {
    console.log(action.type)
    switch (action.type) {
        case EClientActions.LOAD_REQUEST:
            return { ...state, loading: true }
        case EClientActions.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.data }
        case EClientActions.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [], }

        case EClientActions.SAVE_REQUEST:
            return { ...state, loading: true }
        case EClientActions.SAVE_SUCCESS:
            state.data.push(action.data)
            return { ...state, data: [...state.data, action.data], loading: false, error: false }
        case EClientActions.SAVE_FAILURE:
            return { ...state, loading: false, error: true }

        case EClientActions.REMOVE_REQUEST:
            return { ...state, loading: true }
        case EClientActions.REMOVE_SUCCESS:
            state.data.splice(action.data)
            return { ...state, loading: false, error: false, data: [...state.data], }
        case EClientActions.REMOVE_FAILURE:
            return { ...state, loading: false, error: true }

        case EClientActions.EDIT_REQUEST:
            return { ...state, tmp: action.data }

        default:
            return state
    }
}

