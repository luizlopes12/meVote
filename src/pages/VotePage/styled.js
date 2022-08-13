import styled, {keyframes} from 'styled-components'

const showVotePage = keyframes`
    0%{
        transform: translateY(100%)
    }
    90%{
        transform: translateY(100%)
    }
    100%{
        transform: translateY(0)
    }
`;


const Styles = styled.section`
    animation: 6.5s ${showVotePage} ease-in-out;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    .welcome{
        width: 100%;
        display: flex;
        gap: 15px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 80px;
        .__image{
            width: 55px;
        }
        .__text{
            font-size: 1.4rem;
            color: #202020;
        }
    }
    .footer{
        width: 100%;
        display: flex;
        justify-content: center;
        color: #777777;
        font-size: 1.1rem;
        margin-top: 100px;
    }

`;

export default Styles;