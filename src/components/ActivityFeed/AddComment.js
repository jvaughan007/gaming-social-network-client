import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

const AddComment = () => {
    return (
        <StyledWrapper>
            <div className='add-comment-form'>
                <form>
                    <label>Add a comment</label>
                    <div className='users-input'>
                        <input></input>
                        <button>
                            <FaPlus />
                        </button>
                    </div>
                </form>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.main`
    .add-comment-form {
        color: white;
        .users-input {
            display: flex;
        }
    }
`;

export default AddComment;
