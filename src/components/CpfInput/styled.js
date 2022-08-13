import styled, {keyframes} from 'styled-components'

const Styles = styled.section`

    .form__input{
    margin-top: 30px;
    background: #fff;
    box-shadow: 0px 4px 25px 0px #00000047;
    padding: 20px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    p{
        font-size: .8rem;
        font-weight: bold;
    }
    input{
        border: 1px solid #ccc;
        background: #e9e9e9;
        border-radius: 10px;
        height: 30px;
        padding: 4px 4px 4px 8px;
        outline: none;
    }
    }
    .form__btn{
        margin-top: 30px;
        button{
            width: 100%;
            background: #202020;
            color: #fff;
            border: none;
            padding: 15px;
            border-radius: 12px;
        }
    }
`;

export default Styles