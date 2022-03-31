import { createSlice } from "@reduxjs/toolkit";

const listChart = [
    {prodId: 1,prodName: 'Shampoo', qty: 1, salary: 5000, category:'Barang'},
    {prodId: 2,prodName: 'Shoap', qty: 1, salary: 4000,category:'Alat'},
    {prodId: 3,prodName: 'Tooth paste', qty: 1, salary: 5500,category:'Rumah'}
]
const listSubCategory = [
    {subname:'Shampoo',category:'Barang'},
    {subname:'Sapu',category:'Alat'},
    {subname:'Keset',category:'Rumah'}
]
const listCategory = ['Alat','Barang','Rumah']

export const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        carts : [...listChart],
        category : [...listCategory],
        subCategory : [...listSubCategory],
        totalHarga : 0,
        totalQty : 0
    },
    reducers :{
        doGetCart : state =>{
            const totalHarga = state.carts.reduce((total,el)=>total+(el.qty*el.salary),0)
            const totalQty = state.carts.reduce((sum,el)=>sum + el.qty,0)
            state.totalHarga = totalHarga
            state.totalQty = totalQty
            return state
        },
        doPlusCart : (state,action)=>{
            const carts = [...state.carts.map(cart =>{
                if (action.payload.id === cart.prodId) {
                    cart.qty = cart.qty + 1
                    return cart
                }
                else {
                    return cart
                }
            })]
            state.carts = carts
        },
        doMinCart : (state,action)=>{
            const carts = [...state.carts.map(cart =>{
                if (action.payload.id === cart.prodId) {
                    cart.qty = cart.qty - 1
                    return cart
                }
                else {
                    return cart
                }
            })]
            state.carts = carts
        },
        doAddCart : (state,action)=>{
            const carts = [...state.carts,action.payload]
            state.carts = carts
        },
        doDeleteCart  : (state,action) =>{
            const carts = [...state.carts.filter(el => el.prodId !== action.payload.id)]
            state.carts = carts
        }
    }
})

export const {doGetCart,doPlusCart,doMinCart,doAddCart,doDeleteCart} = cartSlice.actions
export default cartSlice.reducer