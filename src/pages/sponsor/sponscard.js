import React from 'react'
import './Spons.css'

const SponsCard = (props) => {
    console.log(props)
  return (
    <div>
      <div className='image'>
      <img src = "./images/wok.png" alt=" that aint working" />
      </div>
      <h1>{props.name}</h1>
      <p>{props.about}</p>
      </div>
  )
}

export default SponsCard