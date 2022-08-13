import React from 'react'

export default function Progress() {

  return (
    <div className='progress-container'>
        <div className='title'>REJOINEZ-NOUS !</div>
        <div className='steps'>
          <ul>
            <li className='active'>1•VOTRE CLUB</li>
            <span className='active'> {'>'} </span>
            <li>2•VOTRE FORMULE</li>
            <span className='active'> {'>'} </span>
            <li>3•VOS ACCESSOIRE</li>
            <span className='active'> {'>'} </span>
            <li>4•COORDONNEES</li>
            <span className='active'> {'>'} </span>
            <li>5•CONTRAT</li>
            <span className='active'> {'>'} </span>
            <li>6•PAIEMENT</li>
            <span className='active'> {'>'} </span>
            <li>7•CONFIRMATION</li>
          </ul>
          {/* <ul>
            {}
          </ul> */}
        </div>
    </div>
  )
}
