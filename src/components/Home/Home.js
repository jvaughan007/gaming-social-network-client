import styled from "styled-components";
import NavBar from "./NavBar/NavBar";
import backImgMobile from "./images/prple-controller.jpg";
import backImgDesktop from "./images/controller-desktop.jpg";

const Home = () => {
    return (
        <StyledMain>
            <div className='landing-page'>
                <div>
                    <nav>
                        <NavBar />
                    </nav>
                </div>
                <div className='main-content'>
                    <div className='title-motto'>
                        <h1>Gaming Social Network</h1>
                        <span>Connecting Gamers since 2077</span>
                    </div>
                    <div className='intro-video'>
                        <iframe
                            title='mock video'
                            width='420'
                            height='320'
                            src='https://www.youtube.com/embed/eW7Twd85m2g&ab_channel=StarWars'
                        ></iframe>
                    </div>
                </div>
            </div>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    * {
        padding: 0;
        margin: 0;
    }
    body {
    }
    .title-motto {
        padding-top: 14rem;
        text-align: center;
        margin: auto;
    }
    h1 {
        color: #14ffec;
        padding-bottom: 0.8rem;
    }
    span {
        color: white;
        font-size: 1.9rem;
    }
    .landing-page {
        background-image: url(${backImgMobile});
        background-size: cover;
        background-position: -80rem -8rem;
        height: 90rem;
        padding-bottom: 0;
        width: 100%;
        overflow-y: hidden;
        position: relative;
        margin: 0;
        padding: 0;
    }
    @media all and (min-width: 700px) {
        .landing-page {
            background-image: url(${backImgDesktop});
            background-size: 120%;
            background-position: -5rem -4rem;
            height: 115rem;
        }
        .main-content {
            margin-top: 30rem;
            padding: 0.5rem;
        }
        .title-motto {
            width: 60%;
            float: left;
        }
        h1 {
            font-size: 4rem;
        }
        span {
            font-size: 2rem;
        }
    }
`;

export default Home;
