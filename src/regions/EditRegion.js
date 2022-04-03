import React, {useEffect,useState} from 'react'
import apiRegion from '../api/apiRegion'
import { useHistory } from 'react-router-dom'

export default function EditRegion({match}) {
    let history = useHistory()
    const [values,setValues] = useState({
        region_id : undefined,
        region_name : ''
    })
    useEffect(()=>{
        apiRegion.findOne(match.params.id)
        .then(data =>{
            setValues({
                ...values,
                region_id : data.region_id,
                region_name : data.region_name
            })
        })
        .catch(error => console.log(error))
    },[])
    const handleChange = name => event => {
        setValues({...values,[name]: event.target.value})
    }
    const onSubmit = async () =>{
        const payload ={
            region_id : values.region_id,
            region_name : values.region_name
        }
        await apiRegion.update(payload)
        .then(result => {
            window.alert('Data Successfully Edited')
            history.push('/region')
        })
    }
  return (
    <div>
        <h1>Edit Regions</h1>
        <form>
            <div>
                <label>
                    Region Name : 
                </label>
                <input type='text' placeholder='Region Name' value={values.region_name} onChange={handleChange('region_name')} />
            </div>
        </form>
        <div>
            <button type='button' onClick={onSubmit}>
                Submit
            </button>
            <button type='button' onClick={()=>history.goBack()}>
                Cancel
            </button>
        </div>
    </div>
  )
}
