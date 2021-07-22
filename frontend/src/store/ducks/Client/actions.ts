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


export const saveRequest = (data: IClient) => {
    return {
        type: EClientActions.SAVE_REQUEST,
        data: data
    }
}

export const saveSuccess = (data: IClient) => {
    if (data.id > 0) {
        return {
            type: EClientActions.EDIT_SUCCESS,
            data: data,
        }
    }

    return {
        type: EClientActions.SAVE_SUCCESS,
        data: data,
    }
}

export const saveFailure = () => action(EClientActions.SAVE_FAILURE)


export const editRequest = (data: IClient) => {
    return {
        type: EClientActions.EDIT_REQUEST,
        data: data
    }
}

export const editFailure = () => action(EClientActions.EDIT_FAILURE)

export const removeRequest = (data: IClient) => {

    return {
        type: EClientActions.REMOVE_REQUEST,
        data: data
    }
}

export const removeSuccess = (data: IClient) => {
    return {
        type: EClientActions.REMOVE_SUCCESS,
        data: data,
    }
}

export const removeFailure = () => action(EClientActions.REMOVE_FAILURE)