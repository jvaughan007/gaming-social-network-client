import styled from 'styled-components';
import NavBar from './NavBar/NavBar';
import backImgMobile from './images/prple-controller.jpg';
import backImgDesktop from './images/controller-desktop.jpg';

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
  background: url(${backImgMobile}) no-repeat;
  background-size: 100% 100%;
  height: 100vh;

  .title-motto {
    padding-top: 14rem;
    text-align: center;
    margin: auto;
  }

  iframe {
    margin: 0 auto;
  }

  h1 {
    color: #14ffec;
    padding-bottom: 0.8rem;
  }

  span {
    color: white;
    font-size: 1.9rem;
  }

  @media all and (min-width: 700px) {
    background: url(${backImgDesktop}) no-repeat;
    background-size: 100% 100%;

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
