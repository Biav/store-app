import { delay } from "redux-saga";
import { put } from "redux-saga/effects";
import * as actions from './../actions/';

export function* authUserSaga(action) {
    debugger
    yield put(actions.authUser(action.profile))
}