import React, { useState } from "react";
import styled from "styled-components";
import VertNavBar from "../VerticalNavBar/VertNavBar";
import { FaExclamationCircle } from "react-icons/fa";

import EachChat from "./EachChat/EachChat";
import store from "./MockChat";

const Chat = () => {
    return (
        <StyledMain>
            <div>
                <div className='chat-sect'></div>
                <nav>
                    <VertNavBar />
                </nav>
                <h1>Messages</h1>
                <section className='chat-rooms'>
                    {store.people.map((person, y) => {
                        return (
                            <div className='each-msg' key={y}>
                                <div className='persons-img'>
                                    <img src={person.image} alt='person' />
                                </div>

                                <div className='message'>
                                    <span className='person-name'>
                                        {person.name}
                                    </span>
                                    {person.read ? (
                                        <FaExclamationCircle />
                                    ) : null}
                                    <p>{person.recentSentMessage}</p>
                                    <span className='time-sent'>
                                        {person.timeSent}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </section>
                <section className='each-chat-room'>
                    <div>
                        <EachChat />
                    </div>
                </section>
            </div>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    width: 28.8rem;
    margin: 0 auto;

    @media (min-width: 576px) {
    width: 50rem;
    }

    @media (min-width: 768px) {
    width: 70rem;
    }

    @media (min-width: 992px) {
    width: 90rem;
    }

    @media (min-width: 1200px) {
    width: 112rem;
    }
    .chat-sect {
        background-color: #212121;
        background-size: cover;
        width: 100vw;
        height: 100vh;
        position: absolute;
        left: 0;
        z-index: -1000;s
    }

    nav {
        position: fixed;
        left: 0;
    }

    h1{
        color: white;
        padding-top: 1rem;
        margin-bottom: 2rem;
        text-align: center;

    }
    .chat-rooms {
        background-color: white;
        height: 95%;
        width: 30rem;
        position: fixed;
        overflow: auto;
        left: 0;
        bottom: .5rem;
        border-radius: 3rem;
        margin-right: 1.5rem;
        margin-left: 1.5rem;
        padding: 1.2rem;
        padding-left: 0;
        box-shadow: 5px 5px 5px black;
        z-index: -1;
    }

    .each-msg{
        margin-bottom: 2rem;
        padding: 1rem 0rem 1rem 1rem;
        color: black;
        display: flex;
        transition: .4s;

        .persons-img{
            border: solid 1px white;
            width: 4rem;
            height: 4rem;
            margin-right: 1rem;
            img{
                width: 4rem;
                height: 4rem;
                border-radius: 10rem;
            }
        }

        .message{
            width: 100%;
            .person-name{
                font-size: 1.9rem;
                font-weight: bold;
                margin-right: 1rem;
            }
    
            .time-sent{
                float: right;
                margin-right: 1rem;
                margin-top: .6rem;
                font-size: 1.3rem;

            }
        }

        p{
            margin-top: 1rem;
        }
    }
    .each-msg:hover{
        cursor: pointer;
        border-bottom: solid 3px black;
        border-right: solid 3px black;
        transition: .4s;
    }
    .each-chat-room{
        border: solid 1px white;
        height: 95%;
        width: 40%;
        position: absolute;
        overflow: auto;
        left: 32rem;
        bottom: .5rem;
    }

`;

export default Chat;
