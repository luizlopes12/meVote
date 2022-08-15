import styled, {keyframes} from 'styled-components'

const appear = keyframes`
    0%{
        opacity: 0;
        background: transparent;
    }
    100%{
        opacity: 1;
        background: #00000031;
    }
`
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
`
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
`

const Styles = styled.section`
    min-width: 100%;
    min-height: 100vh;
    background: rgb(255,247,136);
    background: linear-gradient(335.05deg, rgba(255, 209, 0, 0.5) 44.42%, rgba(244, 228, 9, 0.5) 68.64%, rgba(255, 247, 136, 0.5) 90.82%), #F4E409;
    .info{
        width: 100%;
        .__container{
            width: 90%;
            margin: auto;
            display: flex;
            justify-content: space-between;
            padding-top: 80px;
            .__options{
                h1{
                    font-size: 2.2rem;
                    margin-bottom: 5px;
                }
            }
            .__image{
                img{
                    width: 35px;
                }
            }
        }
    }
    .list{
        border-radius: 50px 50px 0 0 ;
        background: #fff;
        min-height: 80vh;
        width: 100%;
        margin-top: 25px;
        padding: 50px 0 50px;
        .__card{
            box-shadow: 0px 4px 25px 0px #0000001f;
            border-radius: 15px;
            width: 90%;
            margin: auto;
            background-color: #fff;
            padding: 18px 3px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 20px;
            .candidate{
                display: flex;
                gap: 10px;
                padding: 10px 40px;
                .__image{
                    background: #ccc;
                    border-radius: 50%;
                    width: 60px;
                    height: 60px;
                    img{
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    }
                }
                .__text{
                    padding-top: 10px;
                    .__lbl{
                        font-size: 1.1rem;
                        font-weight: 600;
                    }
                }
            }
            .voteBtn{
                width: 80%;
                margin: auto;
                padding: 15px;
                border: none;
                background: #FFE143;
                font-weight: 600;
                font-size: 1.2rem;
                border-radius: 15px;
                a{
                    text-decoration: none;
                    color: #202020;
                }
            }
        }
        .voted{
            width: 100%;
            display: flex;
            justify-content: center;
            font-size: 1.5rem;
        }
    }
    .confirmModal{
        display: ${props => props.modalDisplay ? 'block':'none'};
        animation: ${appear} .3s ease-in-out;
        transition: all .3s ease-in-out;
        position: absolute;
        width: 100%;
        top: ${props => `${props.scrollLocation}px`};
        left: 0;
        min-height: 100%;
        background: #00000031;
        .modal__card{
            background: #fff;
            width: 300px;
            margin: 250px auto;
            padding: 10px 0;
            border-radius: 15px;
            .__message{
                padding: 20px 0;
                text-align: center;
                font-size: 1.2rem;
            }
            .__btns{
                width: 100%;
                display: flex;
                justify-content: center;
                gap: 15px;
                padding: 0px 20px 20px;
                button{
                    border: none;
                    padding: 10px;
                    border-radius: 15px;
                    font-size: 1.1rem;
                }
                .confirm{
                    background: #71EF45;
                    color: #000;
                }
                .cancel{
                    background: #E21D1D;
                    color: #fff;
                }
            }
        }
    }
    .successModal{
        display: ${props => props.successModalDisplay ? 'block':'none'};
        transition: all .3s ease-in-out;
        animation: ${appear} .3s ease-in-out;
        position: absolute;
        z-index: 999;
        width: 100%;
        top: ${props => `${props.scrollLocation}px`};
        left: 0;
        min-height: 100%;
        background: #00000031;
        .__card{
            background: #fff;
            width: 300px;
            margin: 250px auto;
            padding: 50px 0;
            border-radius: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img{
                margin-bottom: 15px;
            }
            p{
                font-size: 1.2rem;
                text-align: center;
                padding: 0 10px;
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