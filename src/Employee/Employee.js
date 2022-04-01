import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { GetEmployeeRequest } from '../redux-saga/actions/EmployeeAction'
import { DelEmployeeRequest } from '../redux-saga/actions/EmployeeAction'
export default function Employee() {
    let history = useHistory()
    const dispatch = useDispatch()
    const { employees } = useSelector(state => state.employeeStated)

    useEffect(() => {
        dispatch(GetEmployeeRequest())
    }, [])

    const onDelete = async (id) => {
        dispatch(DelEmployeeRequest(id))
    }
    return (
        <div>
            <h2>List of Employee</h2>
            <button onClick={() => history.push('/employee/new')}>Add Employee</button>
            <table>
                <thead>
                    Employee Name
                </thead>
                <th>Employee Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Hire Date</th>
                <th>Job Id</th>
                <th>Salary</th>
                <th>Manager Id</th>
                <th>Department Id</th>
                <th>Profile</th>
                <th>Action</th>
                <tbody>
                    {
                        employees && employees.map(emp => {
                            return (
                                <tr>
                                    <td>{emp.employee_id}</td>
                                    <td>{emp.first_name}</td>
                                    <td>{emp.last_name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.phone_number}</td>
                                    <td>{emp.hire_date}</td>
                                    <td>{emp.job_id}</td>
                                    <td>{emp.salary}</td>
                                    <td>{emp.manager_id}</td>
                                    <td>{emp.department_id}</td>
                                    <td>{emp.profile}</td>
                                    <button
                                    onClick={() => {
                                        if (window.confirm("Delete this record ?"))
                                            onDelete(emp.employee_id)
                                    }}
                                    >Delete</button>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
