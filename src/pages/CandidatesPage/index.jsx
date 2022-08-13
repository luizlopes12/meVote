import React,{useContext, useState, useEffect} from 'react'
import { AuthContext } from '../../providers/auth'
import API from '../../config/API'
import Styles from './styled'
import logo from '../../img/searchpagelogo.png'
const CandidatesPage = () => {
  const {user} = useContext(AuthContext)
  const [candidatesData, setCandidatesData] = useState([])
  useEffect(()=>{
    API.get('/candidates/list')
    .then((response)=>{
        console.log(response.data.map((item)=>item.label))
        setCandidatesData(response.data)
    })
  },[])
  return (
    <Styles>
      <section className='info'>
        <div className="__container">
          <div className="__options">
            <h1>{candidatesData.length > 1 ? candidatesData.length +' Opções' : candidatesData.length + ' Opção'} </h1>
            <p>escolha o seu favorito (voto único)</p>
          </div>
          <div className="__image">
              <img src={logo} alt="meVote Logo" />
          </div>
        </div>
      </section>
      <section className="searchbox">
        <input type="text" />
      </section>
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
        <button className='voteBtn'>Votar</button>
      </div>
      ))}
      </section>
    </Styles>
  )
}

export default CandidatesPage