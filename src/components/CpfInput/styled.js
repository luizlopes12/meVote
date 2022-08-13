import styled, {keyframes} from 'styled-components'

const Styles = styled.section`
    max-width: 300px;
    .form__input{
    margin-top: 30px;
    background: #fff;
    transition: all .2s ease-in-out;
    box-shadow: ${props => props.shadow === 0? '0px 4px 25px 0px #00000047': props.shadow === 1? '0px 10px 25px 0px #33C50040':'0px 10px 25px 0px #FA262640'};
    padding: 40px 30px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    p{
        font-size: 1.2rem;
        font-weight: bold;
    }
    input{
        border: 1px solid #ccc;
        background: #e9e9e9;
        border-radius: 10px;
        height: 40px;
        padding: 4px 4px 4px 12px;
        outline: none;
        width: 100%;
        font-size: 1.3rem;
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
  margin: 0;
        }
    }
    .invalid__text{
        color: #E21D1D;
    }
    .invalid__badge{
        position: absolute;
        height: 40px;
        width: 8px;
        background: #E21D1D;
        border-radius: 12px 0 0 12px;
    }
    .valid__badge{
        position: absolute;
        height: 40px;
        width: 8px;
        background: #33C500;
        border-radius: 12px 0 0 12px;
    }
    }
    .form__btn{
        margin-top: 45px;
        button{
            width: 100%;
            font-size: 1.5rem;
            font-weight: 500;
            background: #202020;
            color: #fff;
            border: none;
            padding: 15px;
            border-radius: 12px;
            a{
                text-decoration: none;
                color: #fff;
            }
        }
        .__disabled{
            background: #929292;
        }
    }
    .red_shadow{
            box-shadow: 0px 10px 25px 0px #FA262640;
    }
    .green_shadow{
        box-shadow: 0px 10px 25px 0px #33C50040;
    }
`;

export default Styles