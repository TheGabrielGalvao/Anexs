import { call, put } from "redux-saga/effects";
import { api } from "../../../services/api";
import * as ClientActions from "./actions";
import { EClientActions, IClient } from "./types";


export function* load() {
    try {
        const response: { data: IClient[] } = yield call(api.get, '/cliente')

        yield put(ClientActions.loadSuccess(response.data))
    }
    catch (ex) {
        yield put(ClientActions.loadFailure())
    }
}

export function* save(action?: any) {
    try {
        if (action.data) {
            yield call(api.post, '/cliente', action.data)

            yield put(ClientActions.saveSuccess(action.data))

        }
    }
    catch (ex) {
        if (action.type === EClientActions.SAVE_REQUEST) {
            yield put(ClientActions.saveFailure())
        }
        if (action.type === EClientActions.EDIT_REQUEST) {
            yield put(ClientActions.editFailure())
        }

    }
}

export function* remove(action?: any) {
    try {
        yield call(api.delete, `/cliente/${action.data.id}`)

        if (action.data) {
            yield put(ClientActions.removeSuccess(action.data))
        }
    }
    catch (ex) {
        yield put(ClientActions.removeFailure())
    }
}

