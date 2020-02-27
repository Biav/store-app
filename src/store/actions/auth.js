import * as actionTypes from './actionTypes';

export const authUser = (profile) => {
    return {
        type: actionTypes.AUTH_USER,
        token: profile.token,
        userId: profile.userId,
        name: profile.name,
        email: profile.email,
        profileImage: profile.profileImage
    }
}

export const authUserLogin = (user, loginMethod) => {
    return {
        type: actionTypes.AUTH_USER_START,
        profile: user, 
        loginMethod
    }
}

export const authUserLogout = () => {
    return {
        type: actionTypes.AUTH_USER_LOGOUT
    }
}

export const checkLogin = () => {
    return {
        type: actionTypes.AUTH_CHECK_LOGIN
    }
}
