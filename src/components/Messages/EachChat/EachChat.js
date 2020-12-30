import React, { useState } from "react";
import styled from "styled-components";

const EachChat = () => {
    return (
        <StyledMain>
            <div>
                <div className='top-info-bar'>
                    <span></span>
                    <div className='persons-info'>
                        <p>Donovan Le</p>
                        <p>donovan@donovan.com</p>
                    </div>
                </div>
                <div className='input-section'>
                    <div>
                        <input type='text' placeholder='type...'></input>
                    </div>
                    <button type='submit'>Send</button>
                </div>
            </div>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    .top-info-bar {
        border-radius: 10rem;
        height: 8rem;
        color: white;
        display: flex;
        background-color: #0d7377;

        span {
            border: solid 1px white;
            border-radius: 10rem;
            height: 4rem;
            width: 4rem;
            margin-top: 2rem;
            margin-left: 1rem;
        }
        p {
            margin: 1rem;
            font-size: 2.3rem;
        }
    }
`;

export default EachChat;
