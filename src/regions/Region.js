import React, { useState, useEffect } from 'react'
import apiRegion from '../api/apiRegion'
import { useHistory } from 'react-router-dom'

export default function Region() {
    let history = useHistory()
    const [region, setRegion] = useState()
    let [refresh, setRefresh] = useState(false);


    useEffect(() => {
        apiRegion.list().then(data => {
            setRegion(data)
        })
    }, [])

    useEffect(()=>{
        apiRegion.list().then(data => {
            setRegion(data)
        })
        setRefresh(false)
    },[refresh])

    const onEdit = async (id) =>{
        history.push(`region/edit/${id}`)
    }
    const onDelete = async (id) =>{
        apiRegion.deleteRow(id)
        .then(()=>{
            setRefresh(true)
            window.alert('Data Successfully Deleted')
        })
        .catch(error => window.error(error.message))
    }

    return (
        <div>
            <h2>List of Regions</h2>
            <button onClick={() => history.push('/region/new')}>Add Region</button>
            <button onClick={() => history.push('/')}>Back</button>
            <table>
                <thead>
                    Region Name
                </thead>
                <tbody>
                    {
                        region && region.map(regi => {
                            return (
                                <tr>
                                    <td>{regi.region_id}</td>
                                    <td>{regi.region_name}</td>
                                    <button onClick={()=>onEdit(regi.region_id)}>Edit</button>
                                    <button onClick={()=>{
                                        if(window.confirm('Delete this record')) {
                                            onDelete(regi.region_id)
                                        }
                                    }}>Delete</button>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
