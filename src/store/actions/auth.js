import * as actionTypes from './actionTypes';

export const authUser = (profile) => {
    return {
        type: actionTypes.AUTH_USER,
        token: profile.accessToken,
        userId: profile.profileObj.googleId,
        name: profile.profileObj.name,
        email: profile.profileObj.email,
        profileImage: profile.profileObj.imageUrl
    }
}

export const authUserStart = user => {
    return {
        type: actionTypes.AUTH_USER_START,
        profile: user
    }
}
