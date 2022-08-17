import React,{useContext, useState, useEffect} from 'react'
import { AuthContext } from '../../providers/auth'
import { useScrollBlock } from '../../hooks/useScrollBlock' 
import API from '../../config/API'
import Styles from './styled'
import logo from '../../img/searchpagelogo.png'
import successIcon from '../../img/success.png'
import eventLogo from '../../img/event_logo.png'
const CandidatesPage = () => {
  const {user} = useContext(AuthContext)
  const [candidatesData, setCandidatesData] = useState([])
  const [userWasVoted, setUserWasVoted] = useState(false)  
  const [modal, setModal] = useState(false)
  const [successModal, setSuccessModal] = useState(false)
  const [modalData, setModalData] = useState()
  const [blockScroll, allowScroll] = useScrollBlock()

  useEffect(()=>{
    API.get(`/votes/verify/${user.cpf}`)
    .then((response)=>{
      setUserWasVoted(response.data)
    })
    if(!userWasVoted){
      API.get('/candidates/list')
      .then((candidates)=>{
          setCandidatesData(candidates.data)
      })
    }


  },[user.cpf,userWasVoted])
  const openModal = (item) =>{
    setModalData([item])
    setModal(true)
  }
  modal ? blockScroll() : allowScroll()

  const confirmModal = () =>{
    setSuccessModal(true)
    setTimeout(()=>{
      setSuccessModal(false)
      setUserWasVoted(true)
      setModal(false)
    }, 5000)
  }

  const confirmVote = () =>{
    let candidate = modalData.map((item)=>item.id) 
    if(user.cpf){
      API.post('/votes/add',{
        cpf: user.cpf,
        candidateId: candidate
      }).then(()=>{
        confirmModal()
      })
    }

  }
  return (
    <Styles modalDisplay={modal} loadEnd={candidatesData.length > 0} scrollLocation={window.scrollY} successModalDisplay={successModal}>
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
      
      <section className='info'>
        <div className="__container">
          <div className="__options">
            <h1>{candidatesData.length !== 1 ? candidatesData.length +' Opções' : candidatesData.length + ' Opção'} </h1>
            <p>escolha o seu favorito (voto único)</p>
          </div>
          <div className="__image">
              <img src={logo} alt="meVote Logo" />
          </div>
        </div>
      </section>
      {userWasVoted ? (
      <section className='list'>
        <section className="voted">
          Você já votou!
        </section>
        </section>
      ):(
        <section className='list'>
        {candidatesData.map((item, key)=>(
        <div className="__card" id={key}>
        <div className="candidate">
        <div className="__image">
        </div>
        <div className="__text">
          <p className='__lbl'>{item.label}</p>
        </div>
        </div>
        <button className='voteBtn' onClick={()=>openModal(item)}>Votar</button>
      </div>
      ))}
      </section>
      )}
      {modal && (
      <div className="confirmModal">
      <div className="modal__card">
      <div className="__message">
          <p>Deseja votar em {modalData.map((item)=>item.label)}?</p>
      </div>
      <div className="__btns">
      <button className="cancel" onClick={()=>setModal(false)}>
          Cancelar
        </button>
        <button className="confirm" onClick={()=>confirmVote()}>
        Confirmar
        </button>
      </div>
      </div>
    </div>
      )}
      {successModal && (
      <div className="successModal">
        <div className="__card">
            <img src={successIcon} alt="Success icon" />
            <p>Voto contabilizado com sucesso!</p>
        </div>
      </div>
      )}

    </Styles>
  )
}

export default CandidatesPage