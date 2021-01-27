import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { API_URL } from '../../config';

const CreateGroupForm = () => {
  const [name, setName] = useState('');
  const [errors, setErrors] = useState(null);
  const [image, setImage] = useState(null);
  const [processing, setProcessing] = useState(false);
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setErrors(null);
      setProcessing(true);

      if (!image) {
        setProcessing(false);
        return setErrors(['You must provide an image']);
      }

      const formData = new FormData();
      formData.append('group_name', name);
      formData.append('image', image);

      const token = localStorage.getItem('jwt');

      const res = await fetch(`${API_URL}/groups`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json'
        },
        body: formData
      });
      const data = await res.json();

      if (!data.success) {
        const errors = data.errors.map((err) => err.msg);
        setErrors(errors);
        return setProcessing(false);
      }
      setProcessing(false);
      return history.push(`/group/${data.group.slug}`);
    } catch (err) {
      console.log(err);
    }
  };

  const fileChangedHandler = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      {errors ? (
        <StyledErrors>
          {errors.map((msg, idx) => (
            <p key={idx}>{msg}</p>
          ))}
        </StyledErrors>
      ) : null}
      <label htmlFor='name'>
        Group Name <span>(Max Length: 50 characters)</span>
      </label>
      <input
        type='text'
        onChange={(e) => setName(e.target.value)}
        id='name'
        maxLength='50'
        required
      />
      <label htmlFor='avatar'>Group Avatar</label>
      <input type='file' onChange={fileChangedHandler} required id='avatar' />
      {image ? (
        <div className='preview'>
          <p className='preview-text'>Banner Preview</p>
          <img src={URL.createObjectURL(image)} alt='Avatar Preview' />
          {name.trim().length ? <h3>{name}</h3> : <h3>Group Name</h3>}
          <button type='button'>Join Group</button>
        </div>
      ) : null}
      {processing ? (
        <button disabled>Create Group</button>
      ) : (
        <button type='submit'>Create Group</button>
      )}
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 68rem;
  margin: 3.2rem auto 0 auto;
  padding: 0 1.6rem;

  label {
    margin-bottom: 0.8rem;
    font-weight: 700;
    font-size: 1.8rem;

    span {
      font-size: 1.4rem;
      font-weight: 400;
    }
  }

  input[type='text'] {
    height: 4.8rem;
    border-radius: 0.4rem;
    padding-left: 0.8rem;
    border: none;
    outline: none;
    margin-bottom: 1.6rem;
  }

  input[type='file'] {
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .preview {
    margin: 1.6rem auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(13, 115, 119);
    background: radial-gradient(
      circle,
      rgba(13, 115, 119, 1) 0%,
      rgba(148, 83, 211, 1) 100%
    );
    width: 100%;
    padding: 1.6rem 0;
    border-radius: 0.4rem;
    position: relative;

    .preview-text {
      position: absolute;
      right: 0.4rem;
      bottom: 0.4rem;
      font-size: 1.4rem;
      color: #fff;
    }

    button {
      border-radius: 0.4rem;
      border: none;
      cursor: default;
      height: 3.2rem;
      padding: 0.4rem 2.4rem;
      background: #9453d3;
      color: #fff;
    }

    h3 {
      color: #fff;
      background: #000;
      border-radius: 0.4rem;
      opacity: 0.9;
      margin-top: 0.8rem;
      padding: 0.4rem 0.8rem;
    }

    img {
      width: 8.8rem;
      height: 8.8rem;
      border-radius: 100%;
      border: 0.2rem solid #fff;
    }
  }

  button {
    margin-top: 1.6rem;
    height: 4.8rem;
    cursor: pointer;
    background: #131b21;
    color: #fff;
    outline: none;
    border: none;
    border-radius: 0.4rem;
  }

  @media all and (min-width: 970px) {
    width: 100%;
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

export default CreateGroupForm;
