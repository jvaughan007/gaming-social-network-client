import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { API_URL } from '../../config';

const CreateGroupForm = () => {
  const [groupName, setGroupName] = useState('');
  // const [bannerImage, setBannerImage] = useState(null);
  const [errors, setErrors] = useState(null);
  const [processing, setProcessing] = useState(false);
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!groupName.trim().length) {
      return;
    }

    try {
      setErrors(null);
      setProcessing(true);

      // if (!bannerImage) {
      //   setProcessing(false);
      //   return setErrors(['You must provide an image']);
      // }
      const token = localStorage.getItem('jwt');

      const res = await fetch(`${API_URL}/groups`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ group_name: groupName })
      });
      const data = await res.json();

      if (!data.success) {
        // display the error somewhere
        return;
      }

      setProcessing(false);
      return history.push(`/group/${data.group.slug}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        type='text'
        onChange={(e) => setGroupName(e.target.value)}
        required
      />
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
`;

export default CreateGroupForm;
