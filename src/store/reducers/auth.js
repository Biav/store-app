import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    userId: null,
    name: '',
    email: '',
    profileImage: null,
} 

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case actionTypes.AUTH_USER: 

           let profile = action.profile;

           return {
               ...state,
               token: action.token,
               userId: action.userId,
               name: action.name,
               email: action.email,
               profileImage: action.profileImage
           } 
        
        default:
            return {
                ...state
            }
    }
}

export default reducer;