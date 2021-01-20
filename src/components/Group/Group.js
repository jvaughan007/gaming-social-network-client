import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { API_URL } from '../../config';

// we need to check if the group exists and if so load it in if not navigate to 404
// we need to get the group members
// we need to get the group posts

const Group = () => {
  const [group, setGroup] = useState(null);
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

        setGroup(data.group);
        return setLoading(false);
      } catch (err) {
        return history.push('/404');
      }
    };
    getGroup();
  }, [slug, history]);

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
        <StyledMain>
          <h2 className='no-results'>This group does not exist 😞</h2>
        </StyledMain>
      );
    }

    return <StyledMain>{group.group_name}</StyledMain>;
  };

  return renderGroup();
};

const StyledMain = styled.main`
  .no-results {
    margin-top: 4rem;
    text-align: center;
    width: 100%;
    color: #14ffec;
  }
`;

export default Group;
