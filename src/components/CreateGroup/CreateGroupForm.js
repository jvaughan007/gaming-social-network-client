import styled from 'styled-components';
import { API_URL } from '../../config';

const CreateGroupForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = fetch(`${API_URL}/groups`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify('asdfasdf')
      });
      const data = await res.json();

      if (!data.success) {
        // display the error somewhere
        return;
      }

      console.log(data);

      // redirect here or something
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledForm>
      <input type='text' />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export default CreateGroupForm;
