import React,{useState, useEffect} from 'react'
import Styles from './styled'
import API from '../../config/API'
const RankingPage = () => {
  const [votesData, setVotesData] = useState([])
  useEffect(()=>{
    API.get('/candidates/ranking')
    .then((response)=>{
      setVotesData(response.data)
    })
  },[])
  return (
    <Styles>
      <header className='header'>
          <div className="__title">
              Ranking de Votos
          </div>
          <div className="__subtitle">
              {votesData.length} Participantes
          </div>
      </header>
      <section className="listing">
        {votesData.map((item)=>item.votes)}
      </section>
    </Styles>
  )
}

export default RankingPage