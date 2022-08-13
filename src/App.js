import React from 'react';
import {GlobalStyle} from './global/GlobalStyles'
import SplashPage from './pages/SplashPage';
// import API from './config/API';




function App() {
  // const [data, setData] = useState([])
  // useEffect(()=>{
  //   API.get('/candidates/list')
  //   .then(async(response)=>{
  //     setData(await response.data)
  //   })
  // },[])
  return (
    <>
      <GlobalStyle/>
      <SplashPage/>
    </>

  );
}

export default App;
