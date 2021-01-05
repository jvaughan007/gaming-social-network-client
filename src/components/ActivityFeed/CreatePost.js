import { useState } from 'react';
import youtubeIcon from './images/youtube.svg';
import imageIcon from './images/image.svg';
import { API_URL } from '../../config';
import styled from 'styled-components';

const CreatePost = ({ addPost }) => {
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!text.trim().length) {
                return;
            }
            const token = localStorage.getItem('jwt');
            const res = await fetch(`${API_URL}/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ post_text: text }),
            });
            const data = await res.json();
            addPost(data.post);
            return setText('');
        } catch (err) {
            console.log(err);
            // handle error here
        }
    };

    return (
        <StyledWrapper>
            <form onSubmit={handleSubmit}>
                <textarea
                    type='text'
                    placeholder={`What's new?`}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <div>
                    <ul>
                        <li>
                            <img src={youtubeIcon} alt='Youtube' />
                        </li>
                        <li>
                            <img src={imageIcon} alt='Upload' />
                        </li>
                    </ul>
                    <button type='submit'>Post</button>
                </div>
            </form>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.main`
    form {
        margin-top: 2rem;
        margin-bottom: 3rem;
        border: solid 1px white;
        border-radius: 0.4rem;
        display: flex;
        flex-direction: column;
        textarea {
            height: 12rem;
            padding: 0.8rem;
            border-radius: 0.4rem 0.4rem 0 0;
            resize: none;
            outline: none;
        }
        div {
            height: 5.6rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #212121;
            padding: 0.8rem;
            color: #fff;
            border-radius: 0 0 0.4rem 0.4rem;
            ul {
                display: flex;
                li {
                    margin-right: 0.8rem;
                    cursor: pointer;
                }
            }
            button {
                height: 4rem;
                border-radius: 0.4rem;
                width: 8rem;
                cursor: pointer;
                outline: none;
                border: none;
                color: #fff;
                background: #9453d3;
            }
        }
    }
`;
export default CreatePost;
