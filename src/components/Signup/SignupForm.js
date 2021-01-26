import { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { API_URL } from '../../config';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(null);
  const firstInput = useRef(null);
  let history = useHistory();

  useEffect(() => {
    firstInput.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      email.trim() === '' ||
      username.trim() === '' ||
      password.trim() === ''
    ) {
      return;
    }

    try {
      setErrors(null);
      const res = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });

      const data = await res.json();

      if (!data.success) {
        const errors = data.errors.map((err) => err.msg);
        return setErrors(errors);
      }

      localStorage.setItem('jwt', data.token);
      // need to push to dashboard when dashboard component is finished
      localStorage.setItem('username', username);
      return history.push('/');
    } catch (err) {
      return setErrors(['Something went wrong. Please try again.']);
    }
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        {errors ? (
          <StyledErrors>
            {errors.map((msg, idx) => (
              <p key={idx}>{msg}</p>
            ))}
          </StyledErrors>
        ) : null}
        <input
          type='text'
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
          ref={firstInput}
        />
        <input
          type='email'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Sign Up</button>
      </StyledForm>
    </>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    margin-bottom: 1.6rem;
    height: 4.8rem;
    padding-left: 0.8rem;
    border-radius: 0.4rem;
    border: none;
  }

  button {
    background: #0d7377;
    border-radius: 0.4rem;
    height: 4.8rem;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;

const StyledErrors = styled.div`
  p {
    background: #e31c3d;
    color: #fff;
    border-radius: 0.4rem;
    padding: 0.8rem;
    margin-bottom: 0.8rem;
  }

  p:last-child {
    margin-bottom: 1.6rem;
  }
`;

export default SignupForm;
