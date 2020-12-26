import styled from 'styled-components';
import NavBar from './NavBar/NavBar';
import backImgMobile from './images/prple-controller.jpg';
import backImgDesktop from './images/controller-desktop.jpg';

const Home = () => {
  return (
    <>
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
              src='https://www.youtube.com/embed/eW7Twd85m2g&ab_channel=StarWars'
            ></iframe>
          </div>
        </div>
      </StyledMain>
    </>
  );
};

const StyledMain = styled.main`
  background: url(${backImgMobile}) no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .main-content {
    .cta {
      padding-left: 1.6rem;

      h1 {
        color: #14ffec;
      }

      p {
        color: #fff;
        font-size: 1.9rem;
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
    background: url(${backImgDesktop}) no-repeat;
    background-size: 100% 100%;

    .main-content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 3.2rem;

      .cta {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 0;

        h1 {
          font-size: 4rem;
          color: #14ffec;
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
        display: block;

        iframe {
          width: 42rem;
        }
      }
    }
  }
`;

export default Home;
