import * as actionTypes from './actionTypes';

export const addProduct = (product) => {
    return {
        type: actionTypes.ADD_PRODUCT,
        name: product.name,
        total: product.total,
        description: product.description,
        price: product.price,
        category: product.category
    }
}

export const startAddProduct = (product) => {
    return {
        type: actionTypes.ADD_PRODUCT_START,
        product
    }
}