import React from 'react'
import './Spons.css'
import SponsCard from './sponscard'

function Spons() {
  return (
    <div>
    <div className='background'>
      <h1 className='primary'>Our Sponsors</h1>
      <div className='spons1'>
       <SponsCard name="tesla" about="ev manufacturer" >
       </SponsCard>
      </div>
      <div className='spons2'>
       <SponsCard name="tata" about="car manufacturerbla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla bla bla blabla blabla blabla blabla blabla blabla blabla blabla blabla bla">
       <img src ="./images/wok.png" alt="that aint working" />
       </SponsCard>
      </div>
      <div className='spons3'>
       <SponsCard name="ford" about="automobile companybla blabla blabla blabla blabla blabla bla blabla blabla blabla blabla blavbla blabla blabla bla bla blabla blabla blabla blabla blabla blabla blabla blabla blabla bla">
       </SponsCard>
      </div>
    </div>
  </div>
  )
}

export default Spons