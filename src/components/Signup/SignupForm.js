import { useState } from 'react';
import styled from 'styled-components';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation here

    console.log('sign up form is working!');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input type='text' placeholder='username' onChange={setUsername} />
      <input type='email' placeholder='email' onChange={setEmail} />
      <input type='password' placeholder='password' onChange={setPassword} />
      <button type='submit'>Sign Up</button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #0d7377;
  width: 100%;

  input {
    margin-bottom: 1.6rem;
    height: 4.8rem;
    padding-left: 0.8rem;
    border-radius: 0.4rem;
  }

  button {
    border-radius: 0.4rem;
    height: 4.8rem;
    cursor: pointer;
  }
`;

export default SignupForm;
