import React, { useEffect, useState } from 'react'
import apiRegion from '../api/apiRegion'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AddRegionRequest } from '../redux-saga/action/RegionAction'

export default function AddRegion() {
    let history = useHistory()
    const dispatch = useDispatch()
    const [value, setValue] = useState({
        region_id: undefined,
        region_name: ''
    })
    const handleChange = name => event => {
        setValue({ ...value, [name]: event.target.value })
    }
    const onSubmit = async () => {
        const payload = {
            region_name: (value.region_name) || ''
        }
        dispatch(AddRegionRequest(payload))
        window.alert('Data Succesfully Insert')
        history.push('/region')

    }
    return (
        <div>
            <h1>Add Regions</h1>
            <form>
                <div>
                    <label>
                        Region Name :
                    </label>
                    <input type='text' placeholder='Region Name' onChange={handleChange('region_name')} />
                </div>
            </form>
            <div>
                <button type='button' onClick={onSubmit}>
                    Submit
                </button>
                <button type='button' onClick={() => history.goBack()}>
                    Cancel
                </button>
            </div>
        </div>
    )
}
