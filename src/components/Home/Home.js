import styled from "styled-components";
import NavBar from "./NavBar/NavBar";
import backImgMobile from "./images/dimitris-unsplash.jpg";
import backImgDesktop from "./images/alex-haney-unsplash.jpg";

const Home = () => {
    return (
        <>
            <StyledDiv></StyledDiv>
            <NavBar></NavBar>
            <StyledMain>
                <div className='main-content'>
                    <div className='cta'>
                        <h1>Gaming Social Network</h1>
                        <p>Connecting Gamers since 2077</p>
                        <button>Sign Up</button>
                    </div>
                    <div className='intro-video'>
                        <iframe
                            title='mock video'
                            height='320'
                            src='https://www.youtube.com/embed/eW7Twd85m2g'
                        ></iframe>
                    </div>
                </div>
            </StyledMain>
        </>
    );
};

const StyledDiv = styled.div`
    background: url(${backImgMobile}) no-repeat;
    background-size: cover;
    background-position: -12rem 0rem;
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    z-index: -1000;

    @media all and (min-width: 700px) {
        background: url(${backImgDesktop}) no-repeat;
        background-size: cover;
    }
`;

const StyledMain = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .main-content {
        .cta {
            padding-left: 1.6rem;

            h1 {
                background: linear-gradient(
                    to right,
                    #212121,
                    #323232,
                    #0d7377,
                    #14ffec
                );
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
                animation: rainbow_animation 5s ease-in-out infinite;
                background-size: 400% 100%;
                font-size: 2.8rem;
            }

            p {
                color: #fff;
                font-size: 2rem;
            }

            button {
                margin-top: 3.2rem;
                height: 4.8rem;
                background: #0d7377;
                border: none;
                color: #fff;
                width: 17rem;
                border-radius: 0.4rem;
                cursor: pointer;
            }
        }

        .intro-video {
            display: none;
        }
    }

    @media all and (min-width: 700px) {
        .main-content {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 4.2rem;

            .cta {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 0;

                h1 {
                    font-size: 5rem;
                    background: linear-gradient(
                        to right,
                        #212121,
                        #323232,
                        #0d7377,
                        #14ffec
                    );
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    animation: rainbow_animation 5s ease-in-out infinite;
                    background-size: 400% 100%;
                }

                p {
                    color: #fff;
                    font-size: 2.8rem;
                }

                button {
                    margin-top: 3.2rem;
                    height: 4.8rem;
                    background: #0d7377;
                    border: none;
                    color: #fff;
                    width: 17rem;
                    border-radius: 0.4rem;
                    cursor: pointer;
                }
            }

            .intro-video {
                display: block;

                iframe {
                    width: 100%;
                }
            }
        }
    }
    @keyframes rainbow_animation {
        0%,
        100% {
            background-position: 0 0;
        }

        50% {
            background-position: 100% 0;
        }
    }
`;

export default Home;
