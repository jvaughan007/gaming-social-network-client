import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { API_URL } from '../../config';

const CreateGroupForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
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
      formData.append('group_description', description);
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
      <label htmlFor='description'>
        Description <span>(Max Length: 140 characters)</span>
      </label>
      <textarea
        type='text'
        onChange={(e) => setDescription(e.target.value)}
        id='description'
        maxLength='140'
        required
      />
      <label htmlFor='avatar'>Group Avatar</label>
      <input type='file' onChange={fileChangedHandler} required id='avatar' />
      {image ? (
        <div className='avatar-preview'>
          <h3>Avatar Preview</h3>
          <img src={URL.createObjectURL(image)} alt='Avatar Preview' />
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

  label[for='avatar'] {
    margin-top: 1.6rem;
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

  .avatar-preview {
    margin: 1.6rem auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-size: 1.8rem;
      font-weight: 500;
      margin-bottom: 0.8rem;
    }

    img {
      width: 8.8rem;
      height: 8.8rem;
      border-radius: 100%;
      border: 0.2rem solid #fff;
    }
  }

  textarea {
    border-radius: 0.4rem;
    padding: 0.8rem;
    border: none;
    outline: none;
    height: 9.6rem;
  }

  button {
    margin-top: 1.6rem;
    height: 4.8rem;
    cursor: pointer;
    background: #9453d3;
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
