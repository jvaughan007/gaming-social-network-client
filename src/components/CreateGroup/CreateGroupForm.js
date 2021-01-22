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
                    Accept: 'application/json',
                },
                body: formData,
            });
            const data = await res.json();

            if (!data.success) {
                setProcessing(false);
                // handle errors here
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
            <input type='text' onChange={(e) => setName(e.target.value)} />
            <input type='file' onChange={fileChangedHandler} />
            {image ? (
                <>
                    <h3>Image Preview</h3>
                    <img src={URL.createObjectURL(image)} alt='Group Img' />
                </>
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
`;

export default CreateGroupForm;
