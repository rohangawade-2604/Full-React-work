import React from 'react'
import axios from 'axios';
import Servcard from './servcard'
import './Serv1.css'
import { useState, useEffect } from 'react';

const Servlist2 = () => {
    const [service1, setService1] = useState([]);

    
    const fetchService1 = () => {
        axios.get("http://localhost:3000/card")
            .then((res) => {
                setService1(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log("Error found in service: " + err);
            });
    };

    useEffect(() => {
        fetchService1();
      }, []);


    return (
        <div>
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
                    {service1.length > 0 ? (
                        <ul>
                            {service1.map((serviceData) => (
                                <li key={serviceData.id}>
                                    <Servcard
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
    )
}

export default Servlist2
