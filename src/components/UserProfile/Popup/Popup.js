import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import { API_URL } from '../../../config';

const PopupModal = ({ profile, updateAvatarURL, updateBannerURL }) => {
  const [processing, setProcessing] = useState(false);
  const [banner, setBanner] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [errors, setErrors] = useState(null);

  const bannerFileChangedHandler = (e) => {
    const file = e.target.files[0];
    setBanner(file);
  };

  const profImageFileChangedHandler = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    console.log(type);

    try {
      setProcessing(true);

      const formData = new FormData();

      if (type === 'banner') {
        formData.append('image', banner);
      }

      if (type === 'profileImage') {
        formData.append('image', profileImage);
      }

      const JWT = localStorage.getItem('jwt');
      const res = await fetch(`${API_URL}/profiles/update/image`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${JWT}`,
          Accept: 'application/json'
        },
        body: formData
      });

      const data = await res.json();
      console.log(data);
      if (!data.success) {
        setErrors(['something']);
      }

      setProcessing(false);
      if (type === 'banner') {
        postBannerToDatabase(data.imageURL);
        setBanner(null);
      }
      if (type === 'profileImage') {
        postProfileImageToDatabase(data.imageURL);
        setProfileImage(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const postBannerToDatabase = async (banner_url) => {
    try {
      const res = await fetch(
        `${API_URL}/profiles/${profile.username}/banner`,
        {
          method: 'PATCH',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({
            user_id: profile.user_id,
            banner_url: banner_url
          })
        }
      );

      const data = await res.json();
      updateBannerURL(data.profile.banner_url);
    } catch (err) {
      console.log(err);
    }
  };
  const postProfileImageToDatabase = async (profile_url) => {
    console.log(profile_url);
    try {
      const res = await fetch(
        `${API_URL}/profiles/${profile.username}/profileImage`,
        {
          method: 'PATCH',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({
            user_id: profile.user_id,
            profile_url
          })
        }
      );

      const data = await res.json();
      updateAvatarURL(data.profile.profile_url);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Popup
      trigger={<button className='button'>Edit Profile</button>}
      modal
      nested
    >
      {(close) => (
        <StyledWrapper>
          <div className='modal'>
            {errors ? <p>{errors}</p> : null}
            <button className='close' onClick={close}>
              &times;
            </button>
            <div className='header'> Edit image and banner </div>
            <div className='content'>
              {' '}
              <form onSubmit={(e) => handleSubmit(e, 'banner')}>
                <label htmlFor='banner'>Upload new banner</label>
                <input
                  id='banner'
                  type='file'
                  onChange={bannerFileChangedHandler}
                />
                {processing ? (
                  <button type='button' disabled>
                    Upload
                  </button>
                ) : (
                  <button type='submit'>Upload</button>
                )}
              </form>
              <br />
              <br />
              <br />
              <form onSubmit={(e) => handleSubmit(e, 'profileImage')}>
                <label htmlFor='image'>Upload new image</label>
                <input
                  id='image'
                  type='file'
                  onChange={profImageFileChangedHandler}
                />
                {processing ? (
                  <button type='button' disabled>
                    Upload
                  </button>
                ) : (
                  <button type='submit'>Upload</button>
                )}
              </form>
            </div>
          </div>
        </StyledWrapper>
      )}
    </Popup>
  );
};

export default PopupModal;

const StyledWrapper = styled.main`
  .modal {
    font-size: 12px;
  }
  .modal > .header {
    width: 100%;
    border-bottom: 1px solid gray;
    font-size: 18px;
    text-align: center;
    padding: 5px;
  }
  .modal > .content {
    width: 100%;
    padding: 10px 5px;
  }
  .modal > .actions {
    width: 100%;
    padding: 10px 5px;
    margin: auto;
    text-align: center;
  }
  .modal > .close {
    cursor: pointer;
    position: absolute;
    display: block;
    padding: 2px 6px;
    line-height: 20px;
    right: -10px;
    top: -10px;
    font-size: 24px;
    background: red;
    border-radius: 18px;
  }
  .close:focus {
    outline: none;
  }
`;
