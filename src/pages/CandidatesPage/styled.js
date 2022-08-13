import styled, {keyframes} from 'styled-components'

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
                    width: 40px;
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
        padding: 70px 30px 50px;
        .__card{
            box-shadow: 0px 4px 25px 0px #0000001f;
            border-radius: 15px;
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
            }
        }
    }
    
`;

export default Styles