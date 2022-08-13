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
console.log(verifyCPF('49371955819'))
  return (
    <Styles>
      <div className="form__input">
        <p>Insira seu CPF</p>
        <input type="number" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      </div>
      <div className="form__btn">
        <button>Continuar :|</button>
      </div>
    </Styles>
  )
}

export default CpfInput