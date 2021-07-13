import React, { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { LocationContext } from "./LocationProvider"
import "./Location.css"

export const LocationDetail = () => {
    const { getLocationById } = useContext(LocationContext)

    const [location, setLocation] = useState({})

	const {locationId} = useParams();

  useEffect(() => {
    getLocationById(locationId)
    .then((response) => {
      setLocation(response)
    })
    }, [])

    const employeeList = location.employees?.map(employee => employee.name).join(", ")
    const animalList = location.animals?.map(animal => animal.name).join(", ")

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <h4 className="location__employees">Employees</h4>
      <div className="location__employeeList">{employeeList}</div>
      <h4 className="location__animals">Current Residents</h4>
      <div className="location__animalList">{animalList}</div>
    </section>
  )
}
