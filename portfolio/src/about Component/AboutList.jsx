import { useEffect, useState } from "react";
// import aboutback from "../page- Component/aboutback";
import Aboutcontent from "./Aboutcontent";

import axios from "axios";
import React from "react";
import './About.css'
import Aboutimg from '../assets/About.png'


const AboutList = () => {

    const [About, setAbout] = useState([]);

    const FetchAbout = () => {
        axios.get("http://localhost:3000/About")
            .then((res) => {
                setAbout(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log("Something is been error found" + err);
            })
    }

    useEffect((res)=>{
        FetchAbout(setAbout)
    },[])

    return (
        <>
            <div className="About">
                <div className="AboutImg">
                    <img src={Aboutimg} alt="" />
                </div>

                <div className="AboutContent">
                    {
                        About.map((AboutData) => (
                            <div key={AboutData.id}>
                                <Aboutcontent
                                    h1={AboutData.h1}
                                    p={AboutData.p}
                                    button={AboutData.button}
                                />
                            </div>

                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default AboutList;