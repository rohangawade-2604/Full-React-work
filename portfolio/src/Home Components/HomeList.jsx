import HomeCard from "./Homecard";
import AboutList from "../about Component/AboutList";
import Person from "../personalize-component/person";
import axios from "axios"
import { useState, useEffect } from "react";
import React from "react";
import './Home.css'
import Servlist2 from "../homeserv component/servlist2";
import Gallary from "../Gallary component/gallary";

const HomeList = () => {

    const [Home, setHome] = useState([]);

    const fetchHome = (setHome) => {
        axios.get("http://localhost:3000/Home")
            .then((res) => {
                setHome(res.data)
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect((res) => {
        fetchHome(setHome)
    }, []);


    return (
        <>
            <div className="Home" >
                <div className="Home-page" >
                    {
                        Home.map((HomeData) => (
                            <li style={{ "list-style": "none" }} key={HomeData.id}>
                                <HomeCard
                                    name={HomeData.name}
                                    desc={HomeData.desc}
                                />
                            </li>

                        )
                        )
                    }
                </div>





            </div>
        <AboutList/>
        <Person/>
        <Gallary/>
        <Servlist2/>
                    
        </>
    );
}

export default HomeList