import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API_URL } from '../../../config';

const UserImages = (profile) => {
    const user = profile.profile;
    const [images, setImages] = useState([]);
    const [image, setImage] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllImages();
    }, []);

    const getAllImages = async () => {
        try {
            const res = await fetch(
                `${API_URL}/profiles/${user.username}/images`
            );

            const data = await res.json();
            setImages(data.images);
            if (!data.success) {
                setError('something');
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setProcessing(true);

            const formData = new FormData();
            formData.append('image', image);

            const JWT = localStorage.getItem('jwt');
            const res = await fetch(`${API_URL}/profiles/update/image`, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${JWT}`,
                    Accept: 'application/json',
                },
                body: formData,
            });

            const data = await res.json();
            if (!data.success) {
                setError('something');
            }

            postImageToDatabase(data.imageURL);
            setProcessing(false);
            setImage(null);
        } catch (err) {
            console.log(err);
        }
    };

    const postImageToDatabase = async (imageURL) => {
        try {
            const res = await fetch(
                `${API_URL}/profiles/${user.username}/images`,
                {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify({
                        user_id: user.user_id,
                        imageURL: imageURL,
                    }),
                }
            );

            const data = await res.json();
            setImages(data.images);
        } catch (err) {
            console.log(err);
        }
    };

    const fileChangedHandler = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleDisplayImages = () => {
        if (images.length > 0) {
            return (
                <div className='image-div'>
                    {images.map((image, y) => {
                        return <img src={image.image_url} key={y}></img>;
                    })}
                </div>
            );
        } else {
            return <span>You have no images</span>;
        }
    };

    return (
        <StyledWrapper>
            <div className='images-body'>
                <header>
                    <span>Your images:</span>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='image'>Upload image</label>
                        <input
                            id='image'
                            type='file'
                            onChange={fileChangedHandler}
                        />
                        {processing ? (
                            <button type='button' disabled>
                                Upload
                            </button>
                        ) : (
                            <button type='submit'>Upload</button>
                        )}
                    </form>
                </header>
                <div className='error'>{error}</div>
                <div className='images-list'>{handleDisplayImages()}</div>
            </div>
        </StyledWrapper>
    );
};

export default UserImages;

const StyledWrapper = styled.main`
    .images-body {
        width: 100%;
        color: white;

        header {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            span {
                padding: 0.5rem 0rem 1rem 0rem;
                width: 15rem;
                border-bottom: solid 2px white;
                margin-bottom: 1rem;
                margin-left: 2rem;
            }

            form {
                margin-left: 2rem;

                label {
                    margin-bottom: 1rem;
                }

                button {
                    margin-top: 1rem;
                }
            }
        }
        .images-list {
            text-align: center;
            margin-top: 4rem;

            span {
                color: red;
            }

            .image-div {
                height: 100%;
                img {
                    width: 80%;
                    height: 80%;
                    margin-top: 4rem;
                }
            }
        }
    }

    @media all and (min-width: 750px) {
        .images-body {
            header {
                flex-direction: row;

                span {
                    padding: 2rem 3rem 0.5rem 0.5rem;
                }

                form {
                    border: solid 1px white;
                    padding: 1rem;
                    label {
                        margin-right: 2rem;
                    }

                    button {
                        margin-left: 9rem;
                    }
                }
            }
            .images-list {
                text-align: center;
                margin-top: 4rem;

                span {
                    color: red;
                }

                .image-div {
                    height: 100%;
                    img {
                        width: 80%;
                        height: 80%;
                        margin-top: 4rem;
                    }
                }
            }
        }
    }
`;
