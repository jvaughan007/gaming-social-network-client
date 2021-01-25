import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { API_URL } from '../../config';
import Sidebar from '../Sidebar/Sidebar';

// we need to get the group members
// we need to get the group posts

const Group = () => {
  const [group, setGroup] = useState(null);
  const [isMember, setIsMember] = useState(null);
  const [loading, setLoading] = useState(true);
  let history = useHistory();
  let { slug } = useParams();

  useEffect(() => {
    const getGroup = async () => {
      try {
        const token = localStorage.getItem('jwt');
        const res = await fetch(`${API_URL}/groups/${slug}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
          }
        });
        const data = await res.json();

        if (!data.success) {
          return setLoading(false);
        }

        console.log(data);

        setIsMember(data.isMember);
        setGroup(data.group);
        return setLoading(false);
      } catch (err) {
        return history.push('/404');
      }
    };
    getGroup();
  }, [slug, history]);

  const handleJoinGroup = async (e) => {
    try {
      e.target.disabled = true;
      const token = localStorage.getItem('jwt');
      const res = await fetch(`${API_URL}/groups/join`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ group_id: group.id, entity_id: group.entity_id })
      });
      const data = await res.json();

      if (!data.success) {
        e.target.disabled = false;
        return;
      }

      e.target.disabled = false;
      return setIsMember(true);
    } catch (err) {
      return history.push('/404');
    }
  };

  const handleLeaveGroup = async (e) => {
    try {
      e.target.disabled = true;
      const token = localStorage.getItem('jwt');
      const res = await fetch(`${API_URL}/groups/leave`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          group_id: group.id,
          entity_id: group.entity_id
        })
      });
      const data = await res.json();

      if (!data.success) {
        e.target.disabled = false;
        return;
      }

      e.target.disabled = false;
      return setIsMember(false);
    } catch (err) {
      return history.push('/404');
    }
  };

  const renderGroup = () => {
    if (loading) {
      return (
        <Loader
          type='TailSpin'
          color='#14FFEC'
          height={100}
          width={100}
          className='spinner'
        />
      );
    }

    if (!group && !loading) {
      return (
        <StyledDiv>
          <Sidebar></Sidebar>
          <StyledNoGroupMain>
            <h2>This group does not exist 😞</h2>
          </StyledNoGroupMain>
        </StyledDiv>
      );
    }

    return (
      <>
        <Sidebar></Sidebar>
        <StyledDiv>
          <StyledHeader>
            <div className='avatar-and-title'>
              <img src={group.image_url} alt='Avatar' />
              <h1 className='group-name'>{group.group_name}</h1>
            </div>

            {isMember ? (
              <button onClick={handleLeaveGroup}>Leave Group</button>
            ) : (
              <button onClick={handleJoinGroup}>Join Group</button>
            )}
          </StyledHeader>
          <StyledMain></StyledMain>
        </StyledDiv>
      </>
    );
  };

  return renderGroup();
};

const StyledDiv = styled.div`
  width: calc(100% - 20rem);
  float: right;
  @media all and (max-width: 970px) {
    width: 100%;
  }
`;

const StyledNoGroupMain = styled.main`
  width: calc(100% - 20rem);
  height: 100vh;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: #14ffec;
  }

  @media all and (max-width: 970px) {
    width: 100%;
  }
`;

const StyledHeader = styled.header`
  height: 20vh;
  background: url('https://image.freepik.com/free-vector/simple-unique-gaming-banner-template_92741-92.jpg')
    no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    border-radius: 0.4rem;
    border: none;
    cursor: pointer;
    height: 4.8rem;
    padding: 0.8rem 3.2rem;
    background: #9453d3;
    color: #fff;
  }

  .avatar-and-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 8.8rem;
      height: 8.8rem;
      border-radius: 100%;
      border: 0.2rem solid #fff;
    }

    .group-name {
      color: #fff;
      background: #000;
      opacity: 0.9;
      margin: 1.6rem 0;
      padding: 0.8rem;
    }
  }
`;

const StyledMain = styled.main``;

export default Group;
