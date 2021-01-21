import styled from 'styled-components';
import CreateGroupForm from './CreateGroupForm';
import SideBar from '../Sidebar/Sidebar';

const CreateGroup = () => {
    return (
        <StyledMain>
            <nav>
                <SideBar />
            </nav>
            <h1>Create Group</h1>
            <CreateGroupForm></CreateGroupForm>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    nav {
        position: fixed;
        left: 0;
        top: 0;
    }
`;

export default CreateGroup;
