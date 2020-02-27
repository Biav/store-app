import { delay } from "redux-saga";
import { put } from "redux-saga/effects";
import * as actions from './../actions/';
import * as actionTypes from './../actions/actionTypes';

export function* authUserSaga(action) {
    let profileUser = [],
        profile = action.profile;
    
    if(action.loginMethod === actionTypes.AUTH_GOOGLE) {

        profileUser = {
            token: profile.accessToken,
            userId: profile.profileObj.googleId,
            name: profile.profileObj.name,
            email: profile.profileObj.email,
            profileImage: profile.profileObj.imageUrl
        }

    } else {

        profileUser = {
            token: profile.accessToken,
            userId: profile.userID,
            name: profile.name,
            email: profile.email,
            profileImage: profile.picture.data.url
        }
    }

    let expireLogin = new Date(new Date().getTime() + 30*24*60*60*1000);

    localStorage.setItem('token', profileUser.token);
    localStorage.setItem('userId', profileUser.userId);
    localStorage.setItem('name', profileUser.name);
    localStorage.setItem('email', profileUser.email);
    localStorage.setItem('expireLogin', expireLogin);

    yield put(actions.authUser(profileUser));
}

export function* authUserLogoutSaga() {
    let profileUser = {
        token: null,
        userId: null,
        name: null,
        email: null,
        profileImage: null
    }

    yield put(actions.authUser(profileUser));
}

export function* checkLoginSaga() {

    let expireLogin = localStorage.getItem('expireLogin'),
        profileUser = {
            token: localStorage.getItem('token'),
            userId: localStorage.getItem('userId'),
            name: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
        };

    debugger

    if(profileUser.token && profileUser.email && Date.parse(expireLogin) > Date.parse(new Date())) {
        yield put(actions.authUser(profileUser));
    }
}

