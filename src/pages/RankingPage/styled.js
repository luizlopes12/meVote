import styled from 'styled-components'

const Styles = styled.section`
    .header{
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
    .listing{
        width: 100%;
        min-height: 100vh;
        background: #fff;
        .info1{
            display: flex;
            flex-direction: column;
        }
    }
`;
export default Styles