import React from 'react'
import "./comp.css";
import AboutList from '../about Component/AboutList';
import Person from '../personalize-component/person';
import Gallary from '../Gallary component/gallary';

const Aboutslist = () => {
  return (
    <div>
    <div className='full'>

      <div className="scont">
        <h1>About</h1>
      </div>

      
    </div>

    <AboutList/>
    <Person/>
    <Gallary/>

    </div>

    
  )
}

export default Aboutslist;
