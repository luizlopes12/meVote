import React,{useState, useEffect} from 'react'
import Styles from './styled'
const CpfInput = () => {
  const [inputValue, setInputValue] = useState()
  const verifyCPF = (strCPF) =>{
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF === "00000000000") return false;

  for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11))  Resto = 0;
    if (Resto !== parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11))  Resto = 0;
    if (Resto !== parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}
  const handleChangeCpf = (e) =>{
    setInputValue(e.target.value)
  }
  return (
    <Styles>
      <div className="form__input">
        <p>Insira seu CPF</p>
        <div className="input__container">
        <input type="number" value={inputValue} onChange={handleChangeCpf}/>
        </div>
      </div>
      <div className="form__btn">
        <button>Continuar :|</button>
      </div>
    </Styles>
  )
}

export default CpfInput