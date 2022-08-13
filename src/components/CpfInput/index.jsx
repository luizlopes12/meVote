import React,{useState, useEffect} from 'react'
import Styles from './styled'
const CpfInput = () => {
  const [inputValue, setInputValue] = useState('')
  const [cpfVerified, setCpfVerified] = useState(false)
  const verifyCPF = (cpf) =>{
    cpf = cpf.replace(/[^\d]+/g,'');	
    if(cpf == '') return false;	
    // Elimina CPFs invalidos conhecidos	
    if (cpf.length != 11 || 
      cpf == "00000000000" || 
      cpf == "11111111111" || 
      cpf == "22222222222" || 
      cpf == "33333333333" || 
      cpf == "44444444444" || 
      cpf == "55555555555" || 
      cpf == "66666666666" || 
      cpf == "77777777777" || 
      cpf == "88888888888" || 
      cpf == "99999999999")
        return false;		
    // Valida 1o digito	
    let add = 0;	
    for (let i=0; i < 9; i ++)		
      add += parseInt(cpf.charAt(i)) * (10 - i);	
      let rev = 11 - (add % 11);	
      if (rev == 10 || rev == 11)		
        rev = 0;	
      if (rev != parseInt(cpf.charAt(9)))		
        return false;		
    // Valida 2o digito	
    add = 0;	
    for (let i = 0; i < 10; i ++)		
      add += parseInt(cpf.charAt(i)) * (11 - i);	
    rev = 11 - (add % 11);	
    if (rev == 10 || rev == 11)	
      rev = 0;	
    if (rev != parseInt(cpf.charAt(10)))
      return false;		
    return true;   
  }
  const handleChangeCpf = (e) =>{
    setInputValue(e.target.value)
    setCpfVerified(verifyCPF(e.target.value))
  }
  return (
    <Styles shadow={inputValue.length == 11 ? cpfVerified ? 1 : 2 :0}>
      <div className='form__input'>
        {inputValue.length == 11 ? (
        <>
        {cpfVerified?(
          <>
          <p>Insira seu CPF</p>
          <div className="input__container">
          <label className="valid__badge"></label>
          <input type="number" value={inputValue} onChange={handleChangeCpf}/>
          </div>
          </>
        ):(
          <>
          <p className='invalid__text'>Insira um CPF válido</p>
          <div className="input__container">
          <label className="invalid__badge"></label>
          <input type="number" value={inputValue} onChange={handleChangeCpf}/>
          </div>
          </>
        )
        }
        </>
        ):(
          <>
          <p>Insira seu CPF</p>
          <div className="input__container">
          <input type="number" value={inputValue} onChange={handleChangeCpf}/>
          </div>
          </>

        )
        }
      </div>
      <div className="form__btn">
      {inputValue.length == 11 ? (
          <>
          {cpfVerified?(
            <button>Continuar :)</button>
          ):(
            <button className='__disabled'>Continuar :(</button>
          )
          }
          </>
        ):(
          <button className='__disabled'>Continuar :|</button>
        )
        }
      </div>
    </Styles>
  )
}

export default CpfInput