import React from 'react'
import Styles from './styled'
import splashlogo from '../../img/splashlogo.png'
import logofatec from '../../img/logofatec.png'

const SplashPage = () => {
  return (
    <Styles>
        <section className='splash1'>
        <img className='__image' src={splashlogo} alt="meVote logo" />
        </section>
        <section className='splash2'>
        <div className="container">
            <p className="__text">Um sistema desenvolvido pelos alunos da Fatec Registro</p>    
            <div className='__divider'>
            <img className='__image' src={logofatec} alt="meVote logo" />
            </div>
        </div>
        </section>
    </Styles>
  )
}

export default SplashPage