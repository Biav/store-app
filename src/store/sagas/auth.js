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

    yield put(actions.authUser(profileUser));
}

