import React,{useContext, useState, useEffect} from 'react'
import { AuthContext } from '../../providers/auth'
import { useScrollBlock } from '../../hooks/useScrollBlock' 
import API from '../../config/API'
import Styles from './styled'
import logo from '../../img/searchpagelogo.png'
import successIcon from '../../img/success.png'
const CandidatesPage = () => {
  const {user,contentLoaded,setContentLoaded} = useContext(AuthContext)
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
          setContentLoaded(true)
      })
    }


  },[user.cpf,userWasVoted,setContentLoaded])
  const openModal = (item) =>{
    blockScroll()
    setModalData([item])
    setModal(true)
  }

  const confirmModal = () =>{
    setSuccessModal(true)
    setTimeout(()=>{
      setSuccessModal(false)
      setUserWasVoted(true)
      setModal(false)
    }, 5000)
  }

  const cancelVote = () =>{
    setModal(false)
    allowScroll()
  }
  const confirmVote = () =>{
    let candidate = modalData.map((item)=>item.id) 
    if(user.cpf){
      API.post('/votes/add',{
        cpf: user.cpf,
        candidateId: candidate
      }).then(()=>{
        confirmModal()
        allowScroll()
      })
    }
  }
  var timeZone = "America/Sao_Paulo";
  var currentDate = new Date();
  var formatter = new Intl.DateTimeFormat("pt-BR", {
    timeZone: timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false
  });
  
  var formattedDate = formatter.format(currentDate);
  
  var localHours = currentDate.getHours()
  var currentYear = currentDate.getFullYear()
  var currentMonth = (currentDate.getMonth()+1).toString().padStart( 2, '0')
  var currentDay = currentDate.getDate().toString().padStart( 2,'0')

  return (
    <Styles modalDisplay={modal} contentLoaded={contentLoaded} scrollLocation={window.scrollY} successModalDisplay={successModal}>
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
      {/* localHours > 17 || currentDay != '21' || currentDay != '20' */}
      { currentDay != '18' ?(
              <section className='list'>
              <section className="voted disponivel">
                Voto disponível apenas até 17h entre os dias 20 e 21 de Abril
              </section>
              </section>
      ):(
        userWasVoted ? (
          <section className='list'>
            <section className="voted">
              Seu voto já foi registrado, obrigado!
            </section>
            </section>
          ):(
          candidatesData.length > 0 ? (
            <section className='list'>
            {candidatesData.map((item, key)=>(
            <div className="__card" id={key}>
            <div className="candidate">
            <div className="__image">
            <p className='__lbl'>{item.label}</p>
            </div>
            <div className="__text">
            </div>
            </div>
            <button className='voteBtn' onClick={()=>openModal(item)}>Votar</button>
          </div>
          ))}
          </section>
          ):(
            <section className='list'>
            <div className="loading">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <span>Carregando</span>
        </div>
        </section>
    
          )
          )
      )}
      {modal && (
      <div className="confirmModal">
      <div className="modal__card">
      <div className="__message">
          <p>Deseja votar em {modalData.map((item)=>item.label)}?</p>
      </div>
      <div className="__btns">
      <button className="cancel" onClick={()=>cancelVote()}>
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