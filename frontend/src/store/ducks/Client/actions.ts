import { action } from "typesafe-actions"
import { EClientActions, IClient } from "./types"

export const loadRequest = () => action(EClientActions.LOAD_REQUEST)

export const loadSuccess = (data: IClient[]) => {
    return {
        type: EClientActions.LOAD_SUCCESS,
        data: data,
    }
}

export const loadFailure = () => action(EClientActions.LOAD_FAILURE)


export const saveRequest = () => action(EClientActions.SAVE_REQUEST)

export const saveSuccess = (data: IClient) => {
    return {
        type: EClientActions.SAVE_SUCCESS,
        data: data,
    }
}

export const saveFailure = () => action(EClientActions.SAVE_FAILURE)


export const removeRequest = () => action(EClientActions.DELETE_REQUEST)

export const removeSuccess = (data: IClient) => {
    return {
        type: EClientActions.DELETE_SUCCESS,
        data: data,
    }
}

export const removeFailure = () => action(EClientActions.DELETE_FAILURE)