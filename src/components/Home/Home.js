import styled from "styled-components";
import NavBar from "./NavBar/NavBar";
import backImg from "./images/prple-controller.jpg";

const Home = () => {
    return (
        <StyledMain>
            <div className='landing-page'>
                <div>
                    <nav>
                        <NavBar />
                    </nav>
                </div>
                <div className='title-motto'>
                    <h1>Gaming Social Network</h1>
                    <span>Connecting Gamers since 2077</span>
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
        padding: 17rem 0;
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
        background-image: url(${backImg});
        background-size: cover;
        background-position: -80rem -8rem;
        height: 90rem;
        padding-bottom: 0;
        width: 100%;
        overflow-y: hidden;
        position: relative;
    }
`;

export default Home;
