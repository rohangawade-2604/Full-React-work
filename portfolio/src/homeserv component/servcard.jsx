// import React from 'react'
import './Serv1.css'

const Servcard = (props) => {
    return (
        <div id="Serv-card1" >
            <h2>{props.head}</h2><br />
            <hr />
            <p>{props.p1}</p><br /><hr />
            <p>{props.p2}</p><br /><hr />
            <p>{props.p3}</p><br /><hr />
            <p>{props.p4}</p><hr />
        </div>
    )
}

export default Servcard;
