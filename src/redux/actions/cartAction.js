import * as ActionType from '../constants/cartConstant'

export const doGetCart = (payload)=>({
    type : ActionType.GET_DATA,
    payload
})

export const doAddCart = (payload) =>({
    type : ActionType.ADD_QTY,
    payload
})

export const doMinCart = (payload) =>({
    type : ActionType.MIN_QTY,
    payload
})