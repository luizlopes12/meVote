import React,{useContext, useState, useEffect} from 'react'
import { AuthContext } from '../../providers/auth'
import API from '../../config/API'
import Styles from './styled'
const CandidatesPage = () => {
  const {user} = useContext(AuthContext)
  const [candidatesData, setCandidatesData] = useState([])
  useEffect(()=>{
    API.get('/candidates/list')
    .then((response)=>{
        console.log(response.data)
        setCandidatesData(response.data)
    })
  },[])
  return (
    <Styles></Styles>
  )
}

export default CandidatesPage