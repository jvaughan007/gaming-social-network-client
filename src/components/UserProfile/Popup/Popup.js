import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';

const PopupModal = () => {
    const [processing, setProcessing] = useState(false);
    return (
        <Popup
            trigger={<button className='button'> Edit Profile </button>}
            modal
            nested
        >
            {(close) => (
                <StyledWrapper>
                    <div className='modal'>
                        <button className='close' onClick={close}>
                            &times;
                        </button>
                        <div className='header'> Edit image and banner </div>
                        <div className='content'>
                            {' '}
                            <form>
                                <label htmlFor='banner'>
                                    Upload new banner
                                </label>
                                <input id='banner' type='file' />
                                {processing ? (
                                    <button type='button' disabled>
                                        Upload
                                    </button>
                                ) : (
                                    <button type='submit'>Upload</button>
                                )}
                            </form>
                            <br />
                            <form>
                                <label htmlFor='image'>Upload new image</label>
                                <input id='image' type='file' />
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
