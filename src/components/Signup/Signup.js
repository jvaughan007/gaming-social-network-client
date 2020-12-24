import styled from 'styled-components';
import SignupForm from './SignupForm';

const Signup = () => {
  return (
    <StyledMain>
      <h1>Sign Up</h1>
      <SignupForm></SignupForm>
    </StyledMain>
  );
};

const StyledMain = styled.main``;

export default Signup;
