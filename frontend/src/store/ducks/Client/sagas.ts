import { call, put } from "redux-saga/effects";
import { api } from "../../../services/api";
import * as ClientActions from "./actions";
import { IClient } from "./types";


export function* load() {
    try {
        const response: { data: IClient[] } = yield call(api.get, '/cliente')

        yield put(ClientActions.loadSuccess(response.data))
    }
    catch (ex) {
        yield put(ClientActions.loadFailure())
    }
}

export function* save(client?: IClient) {
    try {
        yield call(api.post, '/cliente', client)

        if (client) {
            yield put(ClientActions.saveSuccess(client))
        }
    }
    catch (ex) {
        yield put(ClientActions.saveFailure())
    }
}

export function* remove(client?: IClient) {
    try {
        yield call(api.post, '/cliente', client)

        if (client) {
            yield put(ClientActions.removeSuccess(client))
        }
    }
    catch (ex) {
        yield put(ClientActions.removeFailure())
    }
}
