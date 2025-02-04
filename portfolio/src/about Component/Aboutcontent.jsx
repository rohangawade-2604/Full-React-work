import React from 'react'

const Aboutcontent = (props) => {
  return (
    <div>
      <h1 className='head'>{props.h1}</h1><br />
      <p className='para2'>{props.p}</p><br />
      <button className='btn'>{props.button}</button>
    </div>
  )
}

export default Aboutcontent
