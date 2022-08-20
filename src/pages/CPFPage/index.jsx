import React from 'react'
import Styles from './styled'
import CpfInput from '../../components/CpfInput'
import welcomeLogo from '../../img/mevoteapp-logo.png'
const CPFPage = () => {
  return (
    <Styles>
        <section className="welcome">
            <img className='__image' src={welcomeLogo} alt="App logo" />
            <p className='__text'>
                Bem-vindo ao <b>meVote</b>
            </p>
        </section>
        {CpfInput()}
        <footer className='footer'> 
            <b>created by Fatec Registro</b>
        </footer>
    </Styles>
  )
}

export default CPFPage