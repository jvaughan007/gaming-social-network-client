import { useState } from 'react';
import youtubeIcon from './images/youtube.svg';
import imageIcon from './images/image.svg';
import { API_URL } from '../../config';

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
