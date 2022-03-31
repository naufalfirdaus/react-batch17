import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { doGetCart,doPlusCart,doMinCart,doAddCart,doDeleteCart } from '../features/cartSlice'
import CartForm from '../form/CartForm'

export default function CartToolkit() {
    const dispatch = useDispatch()
    const cart = useSelector(state=>state.cartStore.carts)
    const category = useSelector(state => state.cartStore.category)
    const subCategory = useSelector(state => state.cartStore.subCategory)
    const total = useSelector(state => state.cartStore.totalHarga)
    const totalQty = useSelector(state => state.cartStore.totalQty)
    
    const [productCheck,setProductCheck] = useState([])
    const [display,setDisplay] = useState(false)
    const [values,setValues] = useState({
        prod_name : undefined,
        prod_price : 0,
        prod_qty : 0,
        category : undefined
    })
    const onCheckItem = (item) => () =>{
        console.log(item);
    }
    const handleOnChange = name => event => {
        setValues({...values,[name]:event.target.value})
    }
    const onSelectChange = e =>{
        
    }
    const onSubmit=(event)=>{
       event.preventDefault();
       const payload ={
           prodId : (Math.round(Math.random()*10)),
           prodName : values.prod_name,
           salary : values.prod_price,
           qty : values.prod_qty,
           category : values.category
       }
       dispatch(doAddCart(payload))
       setDisplay(false)
    }
    const increment = (id) =>{
        const payload = {id}
        dispatch(doPlusCart(payload))
    }
    const decrement = (id) =>{
        const payload = {id}
        dispatch(doMinCart(payload))
    }
    const deleted = (id) =>{
        const payload ={id}
        dispatch(doDeleteCart(payload))
    }
    useEffect(()=>{
        dispatch(doGetCart())
    })

  return ( 
    <div>
        <h2>List of Carts</h2>
        {
            
            display === true ? <CartForm
            onSubmitForm={onSubmit}
            handleOnChange={handleOnChange}
            category = {category}
            subCategory={subCategory}
            setDisplay={setDisplay}/> : 
            <>
            <button onClick={()=>setDisplay(true)}>Add product</button>
            <table>
            <th>Select </th>
            <th> Product Id</th>
            <th> Product Name</th>
            <th> Category</th>
            <th> Quantity</th>
            <th> Salary</th>
            <th> Sub total</th>
            <th> Action</th>
            <tbody>
                {
                    (cart || []).map(carts =>(
                        <tr key={carts.prodId}>
                            <td>
                                <input type="checkbox" 
                                onChange={onCheckItem(carts)} 
                                checked={productCheck[carts.prodId]}/>
                            </td>
                            <td>{carts.prodId}</td>
                            <td>{carts.prodName}</td>
                            <td>{carts.category}</td>
                            <td>{carts.qty}</td>
                            <td>{carts.salary}</td>
                            <td>{carts.qty * carts.salary}</td>
                            <td>
                                <button onClick={()=>increment(carts.prodId)}>+</button>
                                <button onClick={()=>decrement(carts.prodId)}>-</button>
                                <button onClick={()=>deleted(carts.prodId)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <h3>Total Harga : Rp. {total}</h3>
        <h3>Total Quantity : {totalQty}</h3>
        <button>Checkout</button>
        </>
        }
    </div>
  )
}
