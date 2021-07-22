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
            return { ...state, loading: false, error: false, data: action.data, tmp: INITIAL_STATE.tmp }
        case EClientActions.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [], }

        case EClientActions.SAVE_REQUEST:
            return { ...state, loading: true }
        case EClientActions.SAVE_SUCCESS:
            return { ...state, data: [...state.data, action.data], loading: false, error: false, tmp: INITIAL_STATE.tmp }
        case EClientActions.SAVE_FAILURE:
            return { ...state, loading: false, error: true }

        case EClientActions.REMOVE_REQUEST:
            return { ...state, loading: true }
        case EClientActions.REMOVE_SUCCESS:
            return { ...state, loading: false, error: false, data: [...state.data.filter(x => x.id !== action.data.id)], }
        case EClientActions.REMOVE_FAILURE:
            return { ...state, loading: false, error: true }

        case EClientActions.EDIT_REQUEST:
            return { ...state, tmp: action.data }
        case EClientActions.EDIT_SUCCESS:
            return { ...state, data: [...state.data], loading: false, error: false, tmp: INITIAL_STATE.tmp }
        case EClientActions.EDIT_FAILURE:
            return { ...state, loading: false, error: true }

        default:
            return state
    }
}

