import React,{useState} from 'react'

export default function EmployeeList() {
    const listEmployee =[
        {empId:1,fullName:'naufal',salary:4500},
        {empId:2,fullName:'dian',salary:5500},
        {empId:3,fullName:'firdaus',salary:5000}
    ]
    const [employee, setEmployee] = useState(listEmployee)
    const PenambahanGaji = (id) => {
        setEmployee(
            [...employee.map(emp=>{
                if (id === emp.empId) {
                    emp.salary = emp.salary + 500
                    return emp
                }
                else {
                    return emp
                }
            })]
        )
    }
  return (
    <div>
        <h2>List Employees</h2>
        <ul>
            {
                (employee || []).map(emp =>(
                    <li key={emp.empId}>
                        <p>EmpId : {emp.empId}</p>
                        <p>Full name : {emp.fullName}</p>
                        <p>Salary : {emp.salary}</p>
                        <button onClick={()=>PenambahanGaji(emp.empId)}>Penambahan gaji</button>
                        <button>Raise salary 10%</button>
                        <button>cut salary 5%</button>
                    </li>
                ))
            }
        </ul>
        <h3>Total Salary : Rp. {}</h3>
    </div>
  )
}
