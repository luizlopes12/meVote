import styled,{keyframes} from 'styled-components'

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
    background: #fff;
    min-height: 100vh;
    padding-bottom: 50px;
    .header{
    background:linear-gradient(335.05deg,rgba(255,209,0,0.5) 44.42%,rgba(244,228,9,0.5) 68.64%,rgba(255,247,136,0.5) 90.82%),#F4E409;
    border-radius:  0 0 25px 25px;
        padding: 20px;
        .__title{
            font-size: 1.5rem;
            font-weight: 600;
            text-align: center;
        }
        .__subtitle{
            font-size: .9rem;
            text-align: center;
        }
    }

    .list{
        max-width: 95%;
        margin: 10px auto;
        display: flex;
        flex-direction: column;
        .row{
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 12px;
            border-bottom: 2px solid #d9d9d9;
            border-radius: 15px;
            .column{
                display: flex;
                width: 30%;
                justify-content: center;
                font-size: 1.5rem;
            }
            &.header{
            border-radius: 0px;
            background: #fff;
            .column{
            font-size: 1.2rem;
            }
            }
        }
    }
    .loading{
    width:200px;
    height:60px;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
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
.loading span{
    position: absolute;
    top:75px;
    font-size: 20px;
    letter-spacing: 6px;
    color: #202020;
    left:10%;
}
    @media(min-width: 425px){
        min-width: 425px;
        max-width: 425px;
        margin: auto;
        .info{
        width: 100%;
        }
    }
`;
export default Styles