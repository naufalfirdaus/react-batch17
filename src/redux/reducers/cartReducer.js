import { GET_DATA,ADD_QTY,MIN_QTY } from "../constants/cartConstant";

const listChart = [
    {prodId: 1,prodName: 'Shampoo', qty: 1, salary: 5000, category:'Barang'},
    {prodId: 2,prodName: 'Shoap', qty: 1, salary: 4000,category:'Alat'},
    {prodId: 3,prodName: 'Tooth paste', qty: 1, salary: 5500,category:'Rumah'}
]
const listCategory = [
    {subname:'Shampoo',category:'Barang'},
    {subname:'Sapu',category:'Alat'},
    {subname:'Keset',category:'Rumah'}
]

const INIT_STATE = {
    carts : [...listChart]
}

const cartReducer = (state = INIT_STATE , action) =>{
    switch (action.type) {
        case GET_DATA:
            return {...state}
        case ADD_QTY:
            return AddQty(state,action)
        case MIN_QTY:
            return MinQty(state,action)
        default:
            return {...state}
    }
}

const AddQty = (state,action) =>{
    const {payload} = action
    return {
        ...state,
           carts :  [...state.carts.map(cart =>{
                if (payload.id === cart.prodId) {
                    cart.qty = cart.qty + 1
                    return cart
                }
                else {
                    return cart
                }
            })]
    }
}

const MinQty = (state,action) =>{
    const {payload} = action
    return {
        ...state,
        carts : [...state.carts.map(cart =>{
                    if (payload.id === cart.prodId) {
                        cart.qty = cart.qty - 1
                        return cart
                    }
                    else {
                        return cart
                    }
                })]
    }
}

export default cartReducer