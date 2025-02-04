import React, { useState, useEffect } from 'react';
import './serv.css';
import Person from "../personalize-component/person";
import Servicecard from './servicecard';
import axios from 'axios';

const Servicelist = () => {
  const [service, setService] = useState([]);

  // Function to fetch services
  const fetchService = () => {
    axios.get("http://localhost:3000/card")
      .then((res) => {
        setService(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error found in service: " + err);
      });
  };

  // useEffect to fetch data on component mount
  useEffect(() => {
    fetchService(setService);
  }, []);

  return (
    <div>
      <div className="serv">
        <div className="cont">
          <h1 className="head5">Service</h1>
        </div>
      </div>

      <Person />

      <div className="con">
        <h1 className="head6">Training Plans</h1>
        <br />
        <p className="para4">
          I am currently in Mumbai and will be taking bookings from January 2023
        </p>
        <br />
      </div>

      <div className="cards" >
        <div className="card1" >
          {service.length > 0 ? (
            <ul >
              {service.map((serviceData) => (
                <li key={serviceData.id}>
                  <Servicecard
                    head={serviceData.head}
                    p1={serviceData.p1}
                    p2={serviceData.p2}
                    p3={serviceData.p3}
                    p4={serviceData.p4}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <h2 className="h2-text">No services available</h2>
          )}
        </div>

      </div>
    </div>
  );
};

export default Servicelist;
