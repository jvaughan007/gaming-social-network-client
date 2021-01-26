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
        setProcessing(false);
        return;
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
      <input type='text' onChange={(e) => setName(e.target.value)} />
      <textarea type='text' onChange={(e) => setDescription(e.target.value)} />
      <input type='file' onChange={fileChangedHandler} />
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
  margin: 0 auto;
  padding: 0 1.6rem;

  input {
    height: 4.8rem;
    border-radius: 0.4rem;
    padding-left: 0.8rem;
    border: none;
    outline: none;
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
