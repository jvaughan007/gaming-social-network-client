import { useState } from 'react';
import youtubeIcon from './images/youtube.svg';
import imageIcon from './images/image.svg';
import { API_JWT_TOKEN, API_URL } from '../../config';

const CreatePost = ({ addPost }) => {
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!text.trim().length) {
                return;
            }
            const res = await fetch(`http://localhost:5000/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${API_JWT_TOKEN}`,
                },
                body: JSON.stringify({ text }),
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
        <div>
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
        </div>
    );
};

export default CreatePost;
