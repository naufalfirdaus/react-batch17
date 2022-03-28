import React,{useState,useEffect} from 'react'
import apiRegion from '../api/apiRegion'
import {useHistory} from 'react-router-dom'

export default function Region() {
    let history = useHistory()
    const [region,setRegion] =useState()

    useEffect(()=>{
        apiRegion.list().then(data => {
            setRegion(data)
        })
    })
  return (
    <div>
        <h2>List of Regions</h2>
        <button onClick={()=>history.push('/region/new')}>Add Region</button>
        <button onClick={()=>history.push('/')}>Back</button>
        <table>
            <thead>
                Region Name
            </thead>
            <tbody>
                {
                    region && region.map(regi =>{
                        return (
                        <tr>
                            <td>{regi.region_id}</td>
                            <td>{regi.region_name}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
