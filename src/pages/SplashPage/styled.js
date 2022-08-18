import styled, {keyframes,css} from 'styled-components'

const showLogo = keyframes`
    0%{
        opacity: 0;
        margin-right: 200px;
    }
    100%{
        opacity: 1;
        margin-right: 0;
    }
`
const splashAnimation1 = keyframes`
    0%{
        transform: translateX(0);
    }
    75%{
        transform: translateX(0);
    }
    100%{
        transform: translateX(-100%);
    }
`

const splashAnimation2 = keyframes`
    0%{
        transform: translateX(100%);
    }
    75%{
        transform: translateX(100%);
    }
    100%{
        transform: translateX(0);
    }
`

const showText = keyframes`
    0%{
        transform: translateY(175px);
    }
    40%{
        transform: translateY(175px);
    }
    60%{
        transform: translateY(0);
    }
    90%{
        transform: translateY(0);
    }
    100%{
        transform: translateY(175px);
    }
`

const Styles = styled.section`
.splash1{
    animation: 3s ${splashAnimation1} ease-in-out;
    transform: translateX(-100%);
    width: 100%;
    height: 100vh;
    background: rgb(255,247,136);
    background: linear-gradient(150deg, rgba(255,247,136,1) 0%, rgba(244,228,9,1) 50%, rgba(255,209,0,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    .__image{
        animation: 1.2s ${showLogo} ease-in-out;
        width: 280px;
        @media (max-width: 625px) {
        width: 200px;
        }
    }
}
.splash2{
    background: #fff;
    animation: 3s ${splashAnimation2} ease-in-out;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 280px;
        gap: 20px;
    }
    .__divider{
        background: #fff;
        width: 100%;
        padding-bottom: 40px;
        z-index: 2;
    }
    .__image{
        width: 260px
    }
    .__text{
        z-index: 1;
        animation: 6s ${showText} ease-in-out;
        font-size: 1.7rem;
        font-weight: bold;
        width: 258px;
        transform: translateY(175px);
    }
}
.load__container{
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
            margin-top: 80px;
            .__logo{
                img{
                    width: 150px;
                }
            }
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
                font-size: 1.5rem;
            }
        }
    }   
`;

export default Styles

/*
.loading{
    width:200px;
    height:60px;
    position: absolute;
    left:50%;
    top:70%;
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
*/