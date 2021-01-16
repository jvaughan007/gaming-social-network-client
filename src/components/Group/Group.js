import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { API_URL } from '../../config';
import Layout from '../common/Layout';

//send backend term searchTerm;
//endpoint is /groups/filter?searchTerm=
// we need to check if the group exists and if so load it in if not navigate to 404
// we need to get the group members
// we need to get the group posts

const Group = () => {
  useEffect(() => {
    const getGroup = async () => {};
    getGroup();
  }, []);

  return (
    <Layout>
      <StyledMain>group</StyledMain>
    </Layout>
  );
};

const StyledMain = styled.main``;

export default Group;
