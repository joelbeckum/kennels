import React from "react"
import { Link } from "react-router-dom"
import "./Location.css"

export const LocationCard = ({ location }) => (
    <section className="location">
        <h3 className="location__name">
            <Link to={`/locations/detail/${location.id}`}>
                {location.name}
            </Link>
        </h3>
        <div className="location__address">{location.address}</div>
        <div className="location__numOfAnimals">{location.animals.length} animals</div>
        <div className="location__numOfEmployees">{location.employees.length} employees</div>
    </section>
)