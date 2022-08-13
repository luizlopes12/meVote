import React from 'react'
import Styles from './styled'
import welcomeLogo from '../../img/mevoteapp-logo.png'
const VotePage = () => {
  return (
    <Styles>
        <section className="welcome">
            <img className='__image' src={welcomeLogo} alt="App logo" />
            <p className='__text'>
                Bem vindo ao <b>meVote</b>
            </p>
        </section>
        
        <footer className='footer'> 
            <b>created by Fatec Registro</b>
        </footer>
    </Styles>
  )
}

export default VotePage