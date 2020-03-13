import * as actionTypes from './../actions/actionTypes';

const initialState = {
    name: '',
    total: 0,
    description: '',
    price: 0,
    category: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_PRODUCT: 
            return {
                ...state,
                name: action.name,
                total: action.total,
                description: action.description,
                price: action.price,
                category: action.category
            }

        default: 
            return {
                ...state
            }
    }
}

export default reducer;