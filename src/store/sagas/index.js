import { takeEvery } from "redux-saga/effects";
import * as actionsType from './../actions/actionTypes';

import {
    authUserSaga,
    authUserLogoutSaga,
    checkLoginSaga
} from './auth';

export function* watchAuth(){
    yield takeEvery(actionsType.AUTH_USER_START, authUserSaga);
    yield takeEvery(actionsType.AUTH_USER_LOGOUT, authUserLogoutSaga);
    yield takeEvery(actionsType.AUTH_CHECK_LOGIN, checkLoginSaga)
}