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
            <StyledForm>
                <CreateGroupForm></CreateGroupForm>
            </StyledForm>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    h1 {
        margin-top: 5rem;
        color: white;
    }
    nav {
        position: fixed;
        left: 0;
        top: 0;
    }
    @media all and (min-width: 750px) {
        h1 {
            margin-left: 20%;
        }
    }
`;

const StyledForm = styled.div`
    color: white;
    @media all and (min-width: 750px) {
        margin-left: 20%;
    }
`;
export default CreateGroup;
