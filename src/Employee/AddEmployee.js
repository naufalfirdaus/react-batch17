import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as Yup from "yup";
import { AddEmployeeRequest } from '../redux-saga/actions/EmployeeAction'
export default function AddEmployee() {

    let history = useHistory()
    const dispatch = useDispatch()
    const [startDate, setStartDate] = useState(new Date());
    const [previewImg, setPreviewImg] = useState();
    const [uploaded, setUploaded] = useState(false);

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            job_id: 0,
            salary: 0,
            manager_id: 0,
            department_id: 0,
            profile: undefined
        },
        onSubmit: async (values) => {
            let payload = new FormData();
            payload.append('first_name', values.first_name)
            payload.append('last_name', values.last_name)
            payload.append('email', values.email)
            payload.append('phone_number', values.phone_number)
            payload.append('job_id', parseInt(values.job_id))
            payload.append('salary', (values.salary))
            payload.append('manager_id', parseInt(values.manager_id))
            payload.append('department_id', parseInt(values.department_id))
            payload.append('profile', values.profile)

            dispatch(AddEmployeeRequest(payload))

            history.push('/employee')
        }
    })
    const uploadOnChange = name => event => {
        let reader = new FileReader()
        let file = event.target.files[0]

        reader.onload = () => {
            formik.setFieldValue('profile', file);
            setPreviewImg(reader.result)
        }
        reader.readAsDataURL(file);
        setUploaded(true)
    }

    const onClearImage = event => {
        event.preventDefault();
        setUploaded(false);
        setPreviewImg(null)
    }
    return (
        <div>
            <h1>Add Employee</h1>
            <form>
                <div>
                    <label>
                        First Name :
                    </label>
                    <input type='text' placeholder='First Name' name='first_name' id='first_name' onChange={formik.handleChange} value={formik.values.first_name} />
                </div>
                <div>
                    <label>
                        Last Name :
                    </label>
                    <input type='text' placeholder='Last Name' name='last_name' id='last_name' onChange={formik.handleChange} value={formik.values.last_name} />
                </div>
                <div>
                    <label>
                        Email :
                    </label>
                    <input type='text' placeholder='Email' name='email' id='email' onChange={formik.handleChange} value={formik.values.email} />
                </div>
                <div>
                    <label>
                        Phone Number :
                    </label>
                    <input type='text' placeholder='Phone Number' name='phone_number' id='phone_number' onChange={formik.handleChange} value={formik.values.phone_number} />
                </div>
                <div>
                    <label>
                        Job Id :
                    </label>
                    <input type='text' placeholder='Job Id' name='job_id' id='job_id' onChange={formik.handleChange} value={formik.values.job_id} />
                </div>
                <div>
                    <label>
                        Salary :
                    </label>
                    <input type='text' placeholder='Salary' name='salary' id='salary' onChange={formik.handleChange} value={formik.values.salary} />
                </div>
                <div>
                    <label>
                        Manager Id :
                    </label>
                    <input type='text' placeholder='Manager Id' name='manager_id' id='manager_id' onChange={formik.handleChange} value={formik.values.manager_id} />
                </div>
                <div>
                    <label>
                        Department Id :
                    </label>
                    <input type='text' placeholder='Department Id' name='department_id' id='department_id' onChange={formik.handleChange} value={formik.values.department_id} />
                </div>
                <div className="col-span-6 col-start-4 row-span-2 sm:col-span-1 lg:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">Profile</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            {/* {
                                uploaded === false ?
                                    <svg
                                        className="mx-auto h-2 w-2 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg> :
                                    <>
                                        <img src={previewImg} alt='image' className='mx-auto h-48 w-48' />
                                        <div className="flex text-sm text-gray-600">
                                            <label className="relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                <span className='ml-4' onClick={onClearImage}>Remove</span>
                                            </label>
                                        </div>
                                    </>


                            }

 */}

                            <div className="flex text-sm text-gray-600">
                                <label
                                    htmlFor="profile"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                    <span>Upload a file</span>
                                    <input
                                        type="file"
                                        id="profile"
                                        accept='image/*'
                                        onChange={uploadOnChange('file')}
                                        className='sr-only'
                                    />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                </div>
            </form >
            <div>
                <button type='button' onClick={formik.handleSubmit}>
                    Submit
                </button>
                <button type='button' onClick={() => history.goBack()}>
                    Cancel
                </button>
            </div>
        </div >
    )
}
