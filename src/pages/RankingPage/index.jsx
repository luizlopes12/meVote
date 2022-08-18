import React,{useState, useEffect} from 'react'
import Styles from './styled'
import API from '../../config/API'
const RankingPage = () => {
  const [votesData, setVotesData] = useState([])
  useEffect(()=>{
    API.get('/candidates/ranking')
    .then((response)=>{
      setVotesData(response.data)
  console.log(response.data)

    })
  },[])
  return (
    <Styles>
      <header className='header'>
          <div className="__title">
              Ranking de Votos
          </div>
          <div className="__subtitle">
              ({votesData.length} Participantes)
          </div>
      </header>
        <div className="list">
        <div className="row header">
          <div className="column">Posição</div>
          <div className="column">Equipe</div>
          <div className="column">Votos</div>
        </div>
          {votesData.length < 1 ? (
                <div className="loading">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <span>Carregando</span>
            </div>
          ):(
            votesData.map((candidate, key) =>(
              <div className="row">
              <div className="column">{key + 1}°</div>
              <div className="column">{candidate.label}</div>
              <div className="column">{candidate.votes}</div>
            </div>
              ))
          )}


        </div>
    </Styles>
  )
}

export default RankingPage