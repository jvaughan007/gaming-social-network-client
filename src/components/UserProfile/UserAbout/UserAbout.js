import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API_URL } from '../../../config';

const UserAbout = (profile) => {
    const user = profile.profile;
    const [edit, setEdit] = useState(false);
    const [about, setAbout] = useState(user.user_bio);

    const handleEdit = () => {
        if (edit) {
            return (
                <StyledText>
                    <div className='edit-bio'>
                        <textarea
                            onChange={(e) => setAbout(e.target.value)}
                            defaultValue={about}
                        ></textarea>
                        <button
                            onClick={() => {
                                handleUpdateBio();
                                setEdit((c) => !c);
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </StyledText>
            );
        } else {
            return (
                <div className='bio-text'>
                    <p>{about}</p>
                </div>
            );
        }
    };

    const handleUpdateBio = async () => {
        try {
            const res = await fetch(`${API_URL}/profiles/${user.username}`, {
                method: 'PATCH',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    user_bio: about,
                    user_id: user.user_id,
                }),
            });
            const data = await res.json();
            setAbout(data.profile.user_bio);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <StyledWrapper>
            <div className='about-body'>
                <header>
                    <span>About me:</span>
                    <button onClick={() => setEdit((c) => !c)}>Edit</button>
                </header>
                {handleEdit()}
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.main`
    .about-body {
        color: white;
        margin-top: 2rem;

        header {
            display: flex;
            justify-content: space-between;

            span {
                padding: 1rem 3rem 0.5rem 0.5rem;
                padding-right: 3rem;
                margin-left: 2rem;
                border-bottom: solid 2px white;
            }

            button {
                border: solid 2px white;
                background-color: transparent;
                color: white;
                font-size: 1.3rem;
                padding: 0.5rem 1rem 0.5rem 1rem;
                margin-right: 2rem;
            }
            button:focus {
                outline: none;
            }
        }

        .bio-text {
            margin: auto;
            height: 50rem;
            width: 95%;
            margin-top: 1rem;
            padding: 1rem;

            p {
                line-height: 3rem;
            }
        }
    }
`;

const StyledText = styled.div`
    .edit-bio {
        width: 100%;
        text-align: center;

        textarea {
            width: 95%;
            margin-top: 1rem;
            height: 50rem;
            padding: 1rem;
        }
        textarea:focus {
            outline: none;
        }
    }
`;

export default UserAbout;
