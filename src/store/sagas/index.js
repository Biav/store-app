import { takeEvery } from "redux-saga/effects";
import * as actionsType from './../actions/actionTypes';

import {
    authUserSaga
} from './auth';

export function* watchAuth(){
    yield takeEvery(actionsType.AUTH_USER_START, authUserSaga);
}