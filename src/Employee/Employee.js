import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Page from '../components/commons/Page';
import { useNavigate, Link } from "react-router-dom";
import { GetEmployeeRequest } from '../redux-saga/actions/EmployeeAction'
import { DelEmployeeRequest } from '../redux-saga/actions/EmployeeAction'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { ToastContainer, toast } from 'react-toastify';
import config from '../config/config';
import {
    DotsVerticalIcon,
    DupliempIcon,
    PencilAltIcon,
    TrashIcon,
    UserAddIcon,
} from '@heroicons/react/solid'
import AddEmployee from './AddEmployee'
const columns = [
    { name: 'Employee Id' },
    { name: 'Full Name' },
    { name: 'Email' },
    { name: 'Phone Number' },
    { name: 'Hire Date' },
    { name: 'Job Id' },
    { name: 'Salary' },
    { name: 'Manager Id' },
    { name: 'Department Id' },
    { name: 'Profile' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Employee() {
    const dispatch = useDispatch()
    const { employees } = useSelector(state => state.employeeStated)
    let [isOpen, setIsOpen] = useState(false);
    let [refresh, setRefresh] = useState(false);
    let [isEditOpen, setIsEditOpen] = useState(false);
    const [editPayload, setEditPayload] = useState();

    useEffect(() => {
        dispatch(GetEmployeeRequest())
    }, [])

    const onDelete = async (id) => {
        dispatch(DelEmployeeRequest(id))
    }
    return (
        <div>
            <Page title='Employee' titleButton='Create' onClick={() => setIsOpen(true)}>
                <table className="min-w-full">
                    <thead>
                        <tr className="border-t border-gray-200">
                            {
                                (columns || []).map(col => (
                                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        <span className="lg:pl-2">{col.name}</span>
                                    </th>
                                ))
                            }
                            <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" />
                        </tr>

                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {
                            employees && employees.map(emp => (
                                <tr key={emp.employee_id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.employee_id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.first_name} {emp.last_name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.phone_number}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.hire_date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.job_id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.salary}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.manager_id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.department_id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <img className="h-10 w-10 rounded-full" src={`${config.urlImage}/${emp.profile}`} alt={emp.profile} />
                                        </div>
                                    </td>
                                    <td>
                                        <Menu as="div" className="relative flex justify-end items-center">
                                            {({ open }) => (
                                                <>
                                                    <Menu.Button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                                        <span className="sr-only">Open options</span>
                                                        <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
                                                    </Menu.Button>
                                                    <Transition
                                                        show={open}
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items
                                                            static
                                                            className="mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
                                                        >
                                                            {/* <div className="py-1">
                                                                <Menu.Item>
                                                                    {({ active }) => (

                                                                        <Link to='#'
                                                                            onClick={() => onEdit(emp.emp_id)}
                                                                            className={classNames(
                                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                'group flex items-center px-4 py-2 text-sm'
                                                                            )}>

                                                                            <PencilAltIcon
                                                                                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                                                aria-hidden="true"
                                                                            />
                                                                            Edit
                                                                        </Link>
                                                                    )}
                                                                </Menu.Item>

                                                            </div> */}
                                                            <div className="py-1">
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <Link
                                                                            to="#"
                                                                            onClick={() => {
                                                                                if (window.confirm("Delete this record")) {
                                                                                    onDelete(emp.employee_id)
                                                                                }
                                                                            }}
                                                                            className={classNames(
                                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                'group flex items-center px-4 py-2 text-sm'
                                                                            )}
                                                                        >
                                                                            <TrashIcon
                                                                                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                                                aria-hidden="true"
                                                                            />
                                                                            Delete
                                                                        </Link>
                                                                    )}
                                                                </Menu.Item>
                                                            </div>
                                                        </Menu.Items>
                                                    </Transition>
                                                </>
                                            )}
                                        </Menu>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </Page>
            <ToastContainer autoClose={2000} />
            {
                isOpen ? <AddEmployee
                    isOpen={isOpen}
                    closeModal={() => setIsOpen(false)}
                    onRefresh={() => setRefresh(true)}
                /> : null
            }

        </div>
    )
}
