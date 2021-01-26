import styled from 'styled-components';
import CreateGroupForm from './CreateGroupForm';
import SideBar from '../Sidebar/Sidebar';

const CreateGroup = () => {
  return (
    <>
      <SideBar />
      <StyledDiv>
        <h1>Create Group</h1>
        <CreateGroupForm></CreateGroupForm>
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  width: calc(100% - 20rem);
  float: right;
  height: 100%;

  @media all and (max-width: 970px) {
    width: 100%;
  }
`;
export default CreateGroup;
