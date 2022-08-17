import styled, {keyframes, css} from 'styled-components'
const loadEnding = keyframes`
    0%{
        transform: translateY(0);
    }
    100%{
        transform: translateY(-100%);
    }
`;
const circle = keyframes`
    0%{
        top:60px;
        height:5px;
        border-radius: 50px 50px 25px 25px;
        transform: scaleX(1.7);
    }
    40%{
        height:20px;
        border-radius: 50%;
        transform: scaleX(1);
    }
    100%{
        top:0%;
    }
`;
const shadow = keyframes`
    0%{
        transform: scaleX(1.5);
    }
    40%{
        transform: scaleX(1);
        opacity: .7;
    }
    100%{
        transform: scaleX(.2);
        opacity: .4;
    }
`;
const Styles = styled.section`
    .load__container{
        animation: ${props => (props.isLoaded ? css`${loadEnding} .5s ease-in-out` : '')};
        transform: ${props => (props.isLoaded ? 'translateY(-100%)' : '')};
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        background: linear-gradient(349.97deg, #07070C 1.46%, rgba(49, 49, 82, 0) 98.9%),
        linear-gradient(0deg, #08080D, #08080D);
        display: flex;
        justify-content: center;
        .event__infos{
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 20px;
            margin-top: 50px;
            .__title{
                text-align: center;
                width: 70%;
                line-height: 1.8rem;
                color: #FF7528;
                font-size: 1.4rem;
                font-weight: 600;
            }
            .__subtitle{
                color: #fff;
                font-size: 1.2rem;
            }
        }
    }   

.loading{
    width:200px;
    height:60px;
    position: absolute;
    left:50%;
    top:80%;
    transform: translate(-50%, -50%);
}
.loading span{
    position: absolute;
    top:75px;
    font-size: 20px;
    letter-spacing: 6px;
    color: #DBDBDB;
    left:10%;
}
.circle{
    width:20px;
    height:20px;
    position: absolute;
    border-radius: 50%;
    background-color: #dbdbdb;
    left:15%;
    transform-origin: 50%;
    animation: ${circle} .5s alternate infinite ease;
}


.circle:nth-child(2){
    left:45%;
    animation-delay: .2s;
}
.circle:nth-child(3){
    left:auto;
    right:15%;
    animation-delay: .3s;
}
.shadow{
    width:20px;
    height:4px;
    border-radius: 50%;
    background-color: rgba(0,0,0,.5);
    position: absolute;
    top:62px;
    transform-origin: 50%;
    z-index: -1;
    left:15%;
    filter: blur(1px);
    animation: ${shadow} .5s alternate infinite ease;
}


.shadow:nth-child(4){
    left: 45%;
    animation-delay: .2s
}
.shadow:nth-child(5){
    left:auto;
    right:15%;
    animation-delay: .3s;
}

`;

export default Styles;