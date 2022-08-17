import React,{useContext} from 'react'
import Styles from './styled'
import { AuthContext } from '../../providers/auth'
import eventLogo from '../../img/event_logo.png'
import { useScrollBlock } from '../../hooks/useScrollBlock' 
const LoadingAnimation = () => {
const {contentLoaded} = useContext(AuthContext)
const [blockScroll, allowScroll] = useScrollBlock()
  contentLoaded ? allowScroll():blockScroll()
  return (
    <Styles isLoaded={contentLoaded}>
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
  <div className="loading">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <span>Carregando</span>
  </div>
  </div>
  </Styles>
  )
}

export default LoadingAnimation