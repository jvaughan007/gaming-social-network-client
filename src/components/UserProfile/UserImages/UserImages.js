import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';
import styled from 'styled-components';

const UserImages = () => {
    const [images, setImages] = useState([]);
    const [addImage, setAddImage] = useState(false);

    const onDrop = (picture) => {
        setImages(images.concat(picture));
    };

    const handleAdd = () => {
        if (addImage) {
            return (
                <StyledUploader>
                    <ImageUploader
                        withIcon={true}
                        buttonText='Choose images'
                        onChange={onDrop}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                    />
                </StyledUploader>
            );
        } else {
            return (
                <StyledImages>
                    <div className='image-body'></div>
                </StyledImages>
            );
        }
    };

    return (
        <StyledWrapper>
            <div className='images-body'>
                <header>
                    <span>Your images:</span>
                    <button onClick={() => setAddImage((c) => !c)}>
                        Add images
                    </button>
                </header>
                {handleAdd()}
            </div>
        </StyledWrapper>
    );
};

export default UserImages;

const StyledWrapper = styled.main`
    .images-body {
        width: 100%;
        color: white;
        margin-top: 2rem;

        header {
            display: flex;
            justify-content: space-between;

            span {
                padding: 1rem 3rem 0.5rem 0.5rem;
                margin-left: 2rem;
                border-bottom: solid 2px white;
            }

            button {
                border: solid 2px white;
                background-color: transparent;
                color: white;
                font-size: 1.3rem;
                padding: 0.5rem 1rem 0.5rem 1rem;
            }

            button:focus {
                outline: none;
            }
        }
    }
`;

const StyledImages = styled.div`
    text-align: center;
    .image-body {
        margin: auto;
        height: 50rem;
        width: 95%;
        border: solid 2px #0d7377;
        margin-top: 1rem;
        padding: 1rem;
    }
`;

const StyledUploader = styled.div`
    color: black;
    margin: auto;
    height: 50rem;
    width: 95%;
    margin-top: 1rem;
`;
