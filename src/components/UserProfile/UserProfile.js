import React, { useState, useEffect } from 'react';
import 'reactjs-popup/dist/index.css';
import Sidebar from '../Sidebar/Sidebar';
import { useParams, useHistory } from 'react-router-dom';
import UserAbout from './UserAbout/UserAbout';
import UserGames from './UserGames/UserGames';
import UserImages from './UserImages/UserImages';
import UserFriends from './UserFriends/UserFriends';
import PopupModel from './Popup/Popup';
import { API_URL } from '../../config';
import styled from 'styled-components';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [staticUsername, setStaticUsername] = useState('');
  const [selected, setSelected] = useState(null);
  const [userIsOwner, setUserIsOwner] = useState(false);

  let history = useHistory();
  let { username } = useParams();

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const res = await fetch(`${API_URL}/users/${username}`);
        const data = await res.json();
        setStaticUsername(data.profile.username);
        if (!data.success) {
          return history.push('/404');
        }
        return setProfile(data.profile);
      } catch (err) {
        return history.push('/404');
      }
    };

    const checkCorrectUser = async () => {
      const token = localStorage.getItem('jwt');
      try {
        const res = await fetch(`${API_URL}/auth/verifyJWT`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
          }
        });

        const data = await res.json();
        if (data.username === username) {
          setUserIsOwner(true);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getUserProfile();
    checkCorrectUser();
  }, [history, username]);

  const renderUserBody = () => {
    switch (selected) {
      case 'about':
        return <UserAbout profile={profile} userIsOwner={userIsOwner} />;
      case 'games':
        return <UserGames profile={profile} />;
      case 'images':
        return <UserImages profile={profile} userIsOwner={userIsOwner} />;
      case 'friends':
        return <UserFriends profile={profile} userIsOwner={userIsOwner} />;
      default:
        return <UserAbout profile={profile} userIsOwner={userIsOwner} />;
    }
  };

  return profile ? (
    <>
      <Sidebar />
      <StyledDiv className='user-container'>
        <StyledHeader backgroundImg={profile.banner_url}>
          <div className='user-tags-img'>
            <img
              src={profile.profile_url}
              alt='users default'
              className='user-image'
            ></img>
            <div className='user-tags'>
              <span>{staticUsername}</span>
            </div>
          </div>
          {userIsOwner ? (
            <div className='edit-profile-btn'>
              <PopupModel profile={profile} />
            </div>
          ) : null}
          <div className='control-center'>
            <div>
              <button id='about' onClick={() => setSelected('about')}>
                About
              </button>
            </div>
            <div>
              <button id='games' onClick={() => setSelected('games')}>
                Games
              </button>
            </div>
            <div>
              <button id='images' onClick={() => setSelected('images')}>
                Images
              </button>
            </div>
            <div>
              <button id='friends' onClick={() => setSelected('friends')}>
                Friends
              </button>
            </div>
          </div>
        </StyledHeader>
        <div className='user-profile'>
          <div className='header'></div>
          <div className='user-body'>{renderUserBody()}</div>
        </div>
      </StyledDiv>
    </>
  ) : null;
};
// keeping the styles in case they're needed
// const StyledMain = styled.main`
//   .user-profile {
//     position: fixed;
//     overflow: auto;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;

//     .header {
//       position: fixed;
//       left: 0;
//       top: 0;
//       height: 20rem;

//       .banner-img {
//         width: 100%;
//         height: 100%;
//         opacity: 0.6;
//         z-index: -1000;
//         object-fit: cover;
//       }

//       .user-tags-img {
//         position: absolute;
//         bottom: 6rem;
//         display: flex;
//         img {
//           width: 7rem;
//           height: 7rem;
//           margin-left: 2rem;
//           border-radius: 10rem;
//           margin-right: 2rem;
//           object-fit: cover;
//         }
//         .user-tags {
//           color: white;
//           display: flex;
//           flex-direction: column;
//           font-size: 3.4rem;
//           padding-top: 0.3rem;
//         }
//       }
//       .edit-profile-btn {
//         position: absolute;
//         top: 2rem;
//         right: 2rem;
//         font-size: 1.5rem;

//         button {
//           padding: 0.75rem 1rem 0.75rem 1rem;
//           border: none;
//         }
//         button:focus {
//           outline: none;
//         }
//       }
//       .control-center {
//         position: absolute;
//         bottom: 1rem;
//         display: flex;
//         height: 5rem;
//         padding-left: 1rem;

//         button {
//           color: white;
//           border: none;
//           background-color: transparent;
//           padding: 1rem;
//           padding-bottom: 1.5rem;
//         }
//         button:focus {
//           border-bottom: solid 3.5px white;
//           outline: none;
//         }
//       }
//     }
//     .user-body {
//       position: absolute;
//       top: 20rem;
//       position: relative;
//       width: 100%;
//       height: 100%;
//     }
//   }

//   @media all and (min-width: 500px) {
//     .user-profile {
//       .header {
//         .control-center {
//           padding-left: 2rem;

//           button {
//             padding: 2rem;
//           }
//         }
//       }
//     }
//   }

//   @media all and (min-width: 968px) {
//     .user-profile {
//       width: 95%;
//       height: 100%;
//       position: fixed;
//       left: 20rem;

//       .header {
//       }
//       .user-body {
//         top: 28rem;
//       }
//     }
//   }
// `;

const StyledHeader = styled.header`
  height: 28rem;
  width: 100%;
  background: ${({ backgroundImg }) => `url(${backgroundImg})`};
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .user-tags-img {
    display: flex;
    color: #fff;
    img {
      width: 9.6rem;
      height: 9.6rem;
      margin-left: 3rem;
      border-radius: 10rem;
      margin-right: 2rem;
    }
    .user-tags {
      padding-top: 2rem;
      font-size: 3.5rem;

      .user-gamertag {
        font-size: 2.4rem;
      }
    }
  }
  .edit-profile-btn {
    position: absolute;
    font-size: 1.6rem;
    top: 1.6rem;
    right: 1.6rem;
  }

  .control-center {
    display: flex;
    position: absolute;
    bottom: 0;

    button {
      color: white;
      border: none;
      background-color: transparent;
      padding: 1rem;
      padding-bottom: 1.5rem;
      margin-right: 1.6rem;
      cursor: pointer;
    }
    button:hover {
      border-bottom: solid 1px white;
      outline: none;
    }

    /* button {
      margin-right: 4rem;
      cursor: pointer;
    } */
  }
`;

const StyledDiv = styled.div`
  width: calc(100% - 20rem);
  float: right;

  @media all and (max-width: 970px) {
    width: 100%;
  }
`;

export default UserProfile;
