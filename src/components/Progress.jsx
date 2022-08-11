import React from 'react'

export default function Progress() {
  
  return (
    <div className='progress-container'>
        <div className='title'>REJOINS-NOUS !</div>
        <div className='steps'>
          <ul>
            <li className='active'>1•VOTRE CLUB</li>
            <span className='active'> {'>'} </span>
            <li>2•VOTRE FORMULE</li>
            <span> {'>'} </span>
            <li>3•VOS ACCESSOIRE</li>
            <span> {'>'} </span>
            <li>4•COORDONNEES</li>
            <span> {'>'} </span>
            <li>5•CONTRAT</li>
            <span> {'>'} </span>
            <li>6•PAIEMENT</li>
            <span> {'>'} </span>
            <li>7•CONFIRMATION</li>
          </ul>
        </div>
    </div>
  )
}
