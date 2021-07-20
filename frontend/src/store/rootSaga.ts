import { all, takeLatest } from 'redux-saga/effects'
import { load, remove, save } from './ducks/Client/sagas'
import { EClientActions } from './ducks/Client/types'



export default function* rootSaga() {
    yield all([
        takeLatest(EClientActions.LOAD_REQUEST, load),
        takeLatest(EClientActions.SAVE_REQUEST, load),
    ])
}
