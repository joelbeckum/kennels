import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalList } from "./animal/AnimalList";
import { Location } from "./location/Location";
import { CustomerProvider } from "./customer/CustomerProvider";
import { CustomerList } from "./customer/CustomerList"
import { Employee } from "./employee/Employee";

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      <AnimalProvider>
        <Route exact path="/animals">
          <AnimalList />
        </Route>
      </AnimalProvider>

      <Route path="/locations">
        <Location />
      </Route>
    
      <CustomerProvider>
        <Route exact path="/customers">
            <CustomerList />
        </Route>
      </CustomerProvider>

      <Route path="/employees">
        <Employee />
      </Route>
    </>
  );
};
