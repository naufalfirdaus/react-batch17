import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'
import { GetRegionsRequest, DelRegionsRequest } from '../redux-saga/actions/RegionsAction';

export default function Region() {

    let history = useHistory()
    const dispatch = useDispatch()

    const { regions } = useSelector((state) => state.regionsStated)


    useEffect(() => {
        dispatch(GetRegionsRequest())
    }, [])

    // const onDelete = async (id) =>{
    //     dispatch(doDeleteRequest(id));
    // }
    const onDelete = async (id) => {
        dispatch(DelRegionsRequest(id))
    }

    return (
        <div>
            <h2>List of Regions</h2>
            <button onClick={()=>history.push('/region/new')}>Add Region</button>
            <table>
                <thead>
                    Region Name
                </thead>
                
                <tbody>
                    {
                        regions && regions.map(regi => {
                            return (
                                <tr>
                                    <td>{regi.region_id}</td>
                                    <td>{regi.region_name}</td>
                                    <button onClick={() => {
                                        if (window.confirm("Delete this record ?"))
                                            onDelete(regi.region_id)
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
