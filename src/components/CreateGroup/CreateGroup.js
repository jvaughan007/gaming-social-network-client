import styled from 'styled-components';
import CreateGroupForm from './CreateGroupForm';

const CreateGroup = () => {
  return (
    <StyledMain>
      <h1>Create Group</h1>
      <CreateGroupForm></CreateGroupForm>
    </StyledMain>
  );
};

const StyledMain = styled.main``;

export default CreateGroup;
