import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API_URL } from '../../../config';

const UserImages = ({ profile, userIsOwner }) => {
    const user = profile;
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

            if (!data.success) {
                console.log(data.success);
            }

            setImages(data.images);
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
            console.log(data);
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
        if (images && images.length > 0) {
            return (
                <div className='image-div'>
                    {images.map((image, y) => {
                        return (
                            <div key={y}>
                                <img src={image.image_url}></img>
                            </div>
                        );
                    })}
                </div>
            );
        } else {
            return <span>You have no images yet</span>;
        }
    };

    return (
        <StyledWrapper>
            <div className='images-body'>
                <header>
                    <span>My images:</span>
                    {userIsOwner === true ? (
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
                    ) : null}
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
                padding: 1rem 3rem 1.5rem 3.5rem;
                width: 15rem;
                border-bottom: solid 2px white;
                margin-bottom: 3rem;
                margin-left: 2rem;
                text-align: center;
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

            .image-div {
                height: 100%;
                img {
                    width: 80%;
                    height: 80%;
                    margin-top: 4rem;
                    border-radius: 5rem;
                    box-shadow: 5px 5px 5px black;
                }
            }
        }
    }

    @media all and (min-width: 450px) {
        .images-body {
            header {
                justify-content: space-between;

                span {
                    margin-left: 3rem;
                    text-align: left;
                }

                form {
                    display: flex;
                    height: 4rem;
                    label {
                        margin-right: 2rem;
                    }

                    button {
                        margin-left: 5rem;
                    }
                }
            }
            .images-list {
                .image-div {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 2rem;
                }
            }
        }
    }

    @media all and (min-width: 750px) {
        .images-body {
            .images-list {
                .image-div {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                }
            }
        }
    }

    @media all and (min-width: 970px) {
        .images-body {
            header {
                span {
                    margin-top: 3rem;
                }
            }

            .images-list {
                width: 90%;
                .image-div {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                }
            }
        }
    }
`;
