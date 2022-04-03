import React, {Fragment,useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import DatePicker from "react-datepicker";
import { useNavigate, NavLink, Link } from 'react-router-dom';
import * as Yup from "yup";
import Page from '../components/commons/Page';
import { AddEmployeeRequest } from '../redux-saga/actions/EmployeeAction'
export default function AddEmployee(props) {

    let navigate = useNavigate();
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
            props.closeModal();
            window.alert('Data Succesfully Insert')
            props.onRefresh();
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
            <Transition appear show={props.isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    static
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={() => null}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Add Region
                                </Dialog.Title>
                                <div className="mt-2">
                                    <form action="#" method='POST'>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                name="first_name"
                                                id="first_name"
                                                value={formik.values.first_name}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                autoComplete="first_name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                            {formik.touched.first_name && formik.errors.first_name ? (
                                                <span className="mt-2 text-sm text-red-600">{formik.errors.first_name}</span>
                                            ) : null}
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                name="last_name"
                                                id="last_name"
                                                value={formik.values.last_name}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                autoComplete="last_name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                            {formik.touched.last_name && formik.errors.last_name ? (
                                                <span className="mt-2 text-sm text-red-600">{formik.errors.last_name}</span>
                                            ) : null}
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Email
                                            </label>
                                            <input
                                                type="text"
                                                name="email"
                                                id="email"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                autoComplete="email"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                            {formik.touched.email && formik.errors.email ? (
                                                <span className="mt-2 text-sm text-red-600">{formik.errors.email}</span>
                                            ) : null}
                                        </div>
                                        <div className="col-span-6 row-start-2 sm:col-span-3">
                                            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
                                                Phone Number
                                            </label>
                                            <input
                                                type="text"
                                                name="phone_number"
                                                id="phone_number"
                                                value={formik.values.phone_number}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                autoComplete="phone_number"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                            {formik.touched.phone_number && formik.errors.phone_number ? (
                                                <span className="mt-2 text-sm text-red-600" >{formik.errors.phone_number}</span>
                                            ) : null}
                                        </div>
                                        <div className="col-span-6 row-start-3 sm:col-span-1">
                                            <label htmlFor="job_id" className="block text-sm font-medium text-gray-700">
                                                Job ID
                                            </label>
                                            <input
                                                type="text"
                                                name="job_id"
                                                id="job_id"
                                                value={formik.values.job_id}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                autoComplete="job_id"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                            {formik.touched.job_id && formik.errors.job_id ? (
                                                <span className="mt-2 text-sm text-red-600">{formik.errors.job_id}</span>
                                            ) : null}
                                        </div>
                                        <div className="col-span-6 row-start-3 sm:col-span-1">
                                            <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                                                Salary
                                            </label>
                                            <input
                                                type="text"
                                                name="salary"
                                                id="salary"
                                                value={formik.values.salary}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                autoComplete="salary"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                            {formik.touched.salary && formik.errors.salary ? (
                                                <span className="mt-2 text-sm text-red-600">{formik.errors.salary}</span>
                                            ) : null}
                                        </div>
                                        <div className="col-span-6 row-start-4 sm:col-span-1 lg:col-span-1">
                                            <label htmlFor="manager_id" className="block text-sm font-medium text-gray-700">
                                                Manager ID
                                            </label>
                                            <input
                                                type="text"
                                                name="manager_id"
                                                id="manager_id"
                                                value={formik.values.manager_id}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                autoComplete="manager_id"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="col-span-6 row-start-4 sm:col-span-1 lg:col-span-1">
                                            <label htmlFor="department_id" className="block text-sm font-medium text-gray-700">
                                                Department ID
                                            </label>
                                            <input
                                                type="text"
                                                name="department_id"
                                                id="department_id"
                                                value={formik.values.department_id}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                autoComplete="department_id"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="col-span-6 col-start-4 row-span-2 sm:col-span-1 lg:col-span-3">
                                            <label className="block text-sm font-medium text-gray-700">Profile</label>
                                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                <div className="space-y-1 text-center">
                                                    {
                                                        uploaded === false ?
                                                            <svg
                                                                className="mx-auto h-12 w-12 text-gray-400"
                                                                stroke="currentColor"
                                                                fill="none"
                                                                viewBox="0 0 48 48"
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
                                    </form>
                                </div>

                                <div className="flex flex-row space-x-4 mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={formik.handleSubmit}
                                    >
                                        Submit
                                    </button>

                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={props.closeModal}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div >
    )
}
