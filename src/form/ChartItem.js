import React,{useState,useEffect} from 'react'

export default function ChartItem() {
    const listChart = [
        {prodId: 1,prodName: 'Shampoo', qty: 1, salary: 5000, category : 'Barang'},
        {prodId: 2,prodName: 'Shoap', qty: 1, salary: 4000, category : 'Alat'},
        {prodId: 3,prodName: 'Tooth paste', qty: 1, salary: 5500, category : 'Rumah'}
    ]
    const listSubCategory = [
        {subname : 'Shampoo',category:'Barang'},
        {subname : 'Shoap',category:'Alat'},
        {subname : 'Tooth Paste',category:'Rumah'},
    ]
    const [category]= useState(['Alat','Barang','Rumah'])
    const [cart,setCart] = useState(listChart)
    const [subCategory,setSubCategory] =useState([])
    const [total,setTotal] = useState(0)
    const [totalQty, setTotalQty] = useState(0)
    const [display, setDisplay] = useState(false)
    const [productCheck,setProductCheck] = useState([])
    const [values,SetValues] = useState({
        prod_name : undefined,
        prod_price : 0,
        prod_qty : 0,
        category : undefined,
        subcategory : undefined
    })
    const onCheckItem = (item) => () =>{
        console.log(item);
    }
    const handleOnChange=name=>event=>{
        SetValues({...values,[name]:event.target.value})
    }
    const onSelectChange = e => {
        const value = e.target.selectedIndex !==0 ?
        e.target.options[e.target.selectedIndex].value : null

        const filterCategory = [...listSubCategory.filter(e=>e.category === value)]
        setSubCategory(filterCategory)

        SetValues({...values,category:value})
        
    }
    const onSubmit=(event)=>{
        event.preventDefault()
        setCart([...cart,{
            prodId : (Math.round(Math.random()*10)),
            prodName : values.prod_name,
            salary : values.prod_price,
            qty : values.prod_qty,
            category : values.category,
            subcategory : values.subcategory
        }])
        setDisplay(false)
    }
    const renderForm = ()=>{
        return(
            <form onSubmit={onSubmit}>
                <div>
                    <label>
                        Product Name : 
                    </label>
                    <input 
                    type = "text"
                    placeholder='Product Name'
                    onChange={handleOnChange('prod_name')}
                    />
                </div>
                <div>
                    <label>
                        Quantity : 
                    </label>
                    <input 
                    type = "number"
                    placeholder='Quantity'
                    onChange={handleOnChange('prod_qty')}
                    />
                </div>
                <div>
                    <label>Category : </label>
                    <select onChange={onSelectChange}>
                        <option>Pilih Category</option>
                            {
                                category.map((value,index)=>(
                                    <option key = {index}>{value}</option>
                                ))
                            }
                    </select>
                </div>
                <div>
                    <label>Sub Category : </label>
                    <select onChange={onSelectChange}>
                            {
                                subCategory.map((value,index)=>(
                                    <option key = {index.subname}>{value.subname}</option>
                                ))
                            }
                    </select>
                </div>
                <div>
                    <label>
                        Salary : 
                    </label>
                    <input 
                    type = "text"
                    placeholder='Salary'
                    onChange={handleOnChange('prod_price')}
                    />
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={()=>setDisplay(false)}>Cancel</button>
                </div>
            </form>
        )
    }
    const increment = (id) =>{
        setCart(
            [...cart.map(carts =>{
                if (id === carts.prodId) {
                    carts.qty = carts.qty + 1
                    return carts
                }
                else {
                    return carts
                }
            })]
        )
    }
    const decrement = (id) =>{
        setCart(
            [...cart.map(carts =>{
                if (id === carts.prodId) {
                    carts.qty = carts.qty - 1
                    return carts
                }
                else {
                    return carts
                }
            })]
        )
    }
    useEffect(()=>{
        const TotalHarga = cart.reduce((sum,el)=> sum + (el.salary * el.qty),0)
        setTotal(TotalHarga)
        const TotalQty = cart.reduce((sum,el)=>sum + el.qty,0)
        setTotalQty(TotalQty)
    },[cart])
  return ( 
    <div>
        <h2>List of Carts</h2>
        {
            display === true ? renderForm() :
            <>
            <button onClick={()=>setDisplay(true)}>Add Product</button>
        <table>
            <th>Select</th>
            <th> Product Id</th>
            <th> Product Name</th>
            <th> Quantity</th>
            <th> Salary</th>
            <th> Sub total</th>
            <th> Category</th>
            <th> Sub Category</th>
            <th> Action</th>
            <tbody>
                {
                    (cart || []).map(carts =>(
                        <tr key={carts.prodId}>
                            <td>
                            <input type="checkbox" onChange={onCheckItem(carts)} checked={productCheck[carts.prodId]}/>
                            </td>
                            <td>{carts.prodId}</td>
                            <td>{carts.prodName}</td>
                            <td>{carts.qty}</td>
                            <td>{carts.salary}</td>
                            <td>{carts.qty * carts.salary}</td>
                            <td>{carts.category}</td>
                            <td>{carts.subcategory}</td>
                            <td>
                                <button onClick={()=>increment(carts.prodId)}>+</button>
                                <button onClick={()=>decrement(carts.prodId)}>-</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <h3>Total Harga : Rp. {total}</h3>
        <h3>Total Quantity : {totalQty}</h3>
            </>
        }
    </div>
  )
}
