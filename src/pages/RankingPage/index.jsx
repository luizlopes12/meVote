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
      <section className="listing">
        <div className="__header">
        {votesData.map((item)=>{
          <>
          <div className="info1">
          <p>Equipe</p>
          {item.label}
        </div>
        <div className="info2">
          <p>Votos</p>
          {item.votes}
        </div>
      </>
        })}

        </div>
      </section>
    </Styles>
  )
}

export default RankingPage