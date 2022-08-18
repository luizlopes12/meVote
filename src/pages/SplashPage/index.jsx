import React from 'react'
import Styles from './styled'
import splashlogo from '../../img/splashlogo.png'
import logofatec from '../../img/logofatec.png'
import eventLogo from '../../img/event_logo.png'

const SplashPage = () => {
  return (
    <Styles>
        <section className='splash1'>
        <div className="load__container">
    <div className="event__infos">
      <div className="__logo">
        <img src={eventLogo} alt="Logo do evento" />
      </div>
      <div className="__title">
      Encontro Cervejeiro - Registro 2022
      </div>
      <div className="__subtitle">
      Voto online
      </div>
    </div>

  </div>
  </section>
        <section className='splash2'>
        <div className="container">
            <p className="__text">Desenvolvido por</p>    
            <div className='__divider'>
            <img className='__image' src={logofatec} alt="meVote logo" />
            </div>
        </div>
        </section>
    </Styles>
  )
}

export default SplashPage