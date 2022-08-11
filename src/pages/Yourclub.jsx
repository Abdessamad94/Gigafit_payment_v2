import React from 'react'
import Search from '../components/Search'

export default function Yourclub() {
  return (
    <div className='clubs-container'>
        <div className='title'><span>OU</span> SOUHAITEZ-VOUS VOUS ENTRAINER ?</div>
        <small className='sub-title'>RECHERCHE LE CLUB LE PLUS PROCHE DE CHEZ TOI</small>
        <Search/>
        <div className='clubs-list'>
          <div className='club-card'>

          </div>

        </div>
    </div>
  )
}
