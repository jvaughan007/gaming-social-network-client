import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { API_URL } from '../../config';
import Sidebar from '../Sidebar/Sidebar';
import ActivityFeed from '../ActivityFeed/ActivityFeed';

const Group = () => {
  const [group, setGroup] = useState(null);
  const [members, setMembers] = useState(null);
  const [isMember, setIsMember] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState('posts');
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

        setIsAdmin(data.isAdmin);
        setIsMember(data.isMember);
        setGroup(data.group);
        setMembers(data.members);
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

      await getUpdatedGroupMembers();

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

      await getUpdatedGroupMembers();

      e.target.disabled = false;
      return setIsMember(false);
    } catch (err) {
      return history.push('/404');
    }
  };

  const getUpdatedGroupMembers = async () => {
    try {
      const token = localStorage.getItem('jwt');
      console.log(group.id);
      const res = await fetch(`${API_URL}/groups/${group.id}/members`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      const data = await res.json();
      console.log(data);
      return setMembers(data.members);
    } catch (err) {
      console.log(err);
    }
  };

  const renderGroupMembers = () => {
    if (!members || !members.length) {
      return;
    }

    return (
      <StyledGroupMembers>
        <div className='members'>
          {members.map((member, idx) => (
            <div
              className='member'
              key={idx}
              onClick={() => history.push(`/${member.username}`)}
            >
              <img src={member.profile_url} alt='Member Avatar' />
              <h3>{member.username}</h3>
              <p>View Profile</p>
            </div>
          ))}
        </div>
      </StyledGroupMembers>
    );
  };

  const renderGroupPosts = () => {
    return (
      <StyledGroupPosts>
        <ActivityFeed
          className='activity-feed'
          type='group'
          canPost={isMember}
          group_id={group.id}
          entity_id={group.entity_id}
          colorMode='light'
        ></ActivityFeed>
      </StyledGroupPosts>
    );
  };

  const renderMainContent = () => {
    if (content === 'posts') {
      return renderGroupPosts();
    } else if (content === 'members') {
      return renderGroupMembers();
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
              <div>
                <img
                  src={group.image_url}
                  alt='Avatar'
                  className='avatar-img'
                />
                {isAdmin ? (
                  <div className='edit-icon'>
                    <img
                      src='https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_mode_edit_48px-512.png'
                      alt='Edit'
                    />
                  </div>
                ) : null}
              </div>
              <h1 className='group-name'>{group.group_name}</h1>
            </div>

            {isMember ? (
              <button onClick={handleLeaveGroup}>Leave Group</button>
            ) : (
              <button onClick={handleJoinGroup}>Join Group</button>
            )}
          </StyledHeader>
          <StyledNav>
            <ul>
              <li onClick={() => setContent('posts')}>Posts</li>
              <li onClick={() => setContent('members')}>Members</li>
            </ul>
          </StyledNav>
          <StyledMain>{renderMainContent()}</StyledMain>
        </StyledDiv>
      </>
    );
  };

  return renderGroup();
};

const StyledDiv = styled.div`
  width: calc(100% - 20rem);
  float: right;
  height: 100%;

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
  padding: 5.6rem;
  background: #0d7377;
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

    div:first-child {
      position: relative;
    }

    .avatar-img {
      width: 8.8rem;
      height: 8.8rem;
      border-radius: 100%;
      border: 0.2rem solid #fff;
    }

    .edit-icon {
      width: 2.4rem;
      height: 2.4rem;
      padding: 0.4rem;
      background: #fff;
      border-radius: 100%;
      position: absolute;
      right: 0;
      bottom: 0.4rem;
      background: #f2f3f5;
      cursor: pointer;

      img {
        width: 100%;
      }
    }

    .group-name {
      color: #fff;
      background: #000;
      border-radius: 0.4rem;
      opacity: 0.9;
      margin: 1.6rem 0;
      padding: 0.8rem;
    }
  }
`;

const StyledNav = styled.nav`
  background: #131b21;
  height: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3.2rem;

  ul {
    display: flex;
    width: 68rem;
  }

  li {
    font-size: 2.4rem;
    color: #fff;
    margin-right: 2.4rem;
    font-weight: 700;
    cursor: pointer;
  }
`;

const StyledMain = styled.main`
  padding: 0 1.6rem;
`;

const StyledGroupPosts = styled.div``;

const StyledGroupMembers = styled.div`
  max-width: 68rem;
  margin: 0 auto;
  padding-top: 2.4rem;

  .members {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.6rem;

    .member {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #fff;
      border-radius: 0.4rem;
      padding: 2.4rem;
      cursor: pointer;

      img {
        margin-bottom: 0.8rem;
        width: 7rem;
        height: 7rem;
        border-radius: 100%;
      }

      p {
        margin-top: 1.6rem;
        text-align: center;
        font-weight: 700;
        color: #9453d3;
      }
    }
  }

  @media all and (min-width: 970px) {
    .members {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2.4rem;
    }
  }
`;

export default Group;
