import styled from 'styled-components'
import '../../assets/css/Loading.css'

function TemplateLoading() {
    return (
        <Loading>
            <div className="spinner-box">
                <div className="circle-border">
                    <div className="circle-core"></div>
                </div>  
            </div>
            <div className="loader">
                <p className="heading">Loading</p>
                <div className="loading">
                    <div className="load"></div>
                    <div className="load"></div>
                    <div className="load"></div>
                    <div className="load"></div>
                </div>
            </div>
        </Loading>
     );
}

export default TemplateLoading;

const Loading = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #1d2630;

    .loader {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .heading {
        color: white;
        letter-spacing: 0.2em;
        margin-bottom: 1em;
        font-size: 1.2rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .loading {
        display: flex;
        width: 5em;
        align-items: center;
        justify-content: center;
    }

    .load {
        width: 23px;
        height: 3px;
        background-color: #0e74ce;
        animation: 1s move_5011 infinite;
        border-radius: 5px;
        margin: 0.1em;
    }

    .load:nth-child(1) {
        animation-delay: 0.2s;
    }

    .load:nth-child(2) {
        animation-delay: 0.4s;
    }

    .load:nth-child(3) {
        animation-delay: 0.6s;
    }

    @keyframes move_5011 {
        0% {
            width: 0.2em;
        }

        25% {
            width: 0.7em;
        }

        50% {
            width: 1.5em;
        }

        100% {
            width: 0.2em;
        }
    }
`