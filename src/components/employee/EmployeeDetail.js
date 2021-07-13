import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { useParams } from "react-router-dom"
import "./Employee.css"

export const EmployeeDetail = () => {
    const { getEmployeeById } = useContext(EmployeeContext)

    const [employee, setEmployee] = useState({})

    const {employeeId} = useParams()

    useEffect(() => {
        getEmployeeById(employeeId)
        .then((response) => {
          setEmployee(response)
        })
        }, [])

    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            {console.log(employee)}
            <div className="employee__location">{employee.location?.name}</div>
            <div className="employee__address">{employee.location?.address}</div>
        </section>
    )    

}