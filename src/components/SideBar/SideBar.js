import React from 'react';
import styled from 'styled-components';
import NavContent from './SideBarContents';

import { slide as Menu } from 'react-burger-menu';

const VertNavBar = () => {
    return (
        <StyledMain>
            <div className='mobile-view'>
                <Menu width={'20rem'}>
                    <NavContent />
                </Menu>
            </div>
            <div className='desktop-view'>
                <NavContent />
            </div>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    .desktop-view {
        display: none;
    }
    .mobile-view {
        display: block;
    }
    .bm-burger-button {
        position: fixed;
        width: 2.5rem;
        height: 2rem;
        left: 1rem;
        top: 1rem;
    }
    .bm-burger-bars {
        background: white;
    }
    .bm-cross-button {
        height: 24px;
        width: 24px;
        z-index: 1000;
    }

    /* Color/shape of close button cross */
    .bm-cross {
        background: white;
    }

    .side-bar {
        overflow: hidden;
        width: 20rem;
        height: 100%;
        position: fixed;
        background-color: #323232;

        .logo {
            display: flex;
            margin-top: 2rem;
            margin-bottom: 2rem;

            span {
                border: solid 1px white;
                margin: 2rem;
            }

            .nav-title {
                color: white;
                margin: 1.2rem 0 1.2rem 0.4rem;
                border: none;
                font-size: 4rem;
                transition: 0.5s;
            }
        }

        .search-field {
            text-align: center;

            input {
                width: 16rem;
                margin: auto;
                margin-bottom: 2rem;
            }
        }

        button {
            border: none;
            background: transparent;
            color: white;
            width: 16rem;
            text-align: left;
            padding-top: 1rem;
            padding-bottom: 1rem;
            border-radius: 10rem;
            transition: 0.6s;
        }

        button:hover {
            background-color: #0d7377;
            transition: 0.4s;
        }

        .home-btn {
            margin-top: 1rem;
            margin-left: 1rem;
        }

        .home {
            font-size: 2.2rem;
            margin-left: 1rem;
        }
        .category {
            padding-right: 3rem;
            border-bottom: solid 1px white;
        }

        .dropdown {
            font-size: 2rem;
            margin-top: 2.5rem;
            margin-left: 1rem;

            .nav-category {
                color: white;
            }

            .dropdown-content {
                button {
                    text-align: left;
                    margin-top: 1rem;
                    font-size: 1.5rem;
                }
            }

            .dd-label {
                margin-left: 1rem;
            }
        }
        .log-out {
            position: fixed;
            bottom: 1.5rem;
        }
    }
    @media all and (min-width: 700px) {
        .bm-burger-button {
            width: 3.5rem;
            height: 3rem;
            left: 2rem;
            top: 1rem;
        }

        .mobile-view {
            display: none;
        }

        .desktop-view {
            display: block;
        }
    }
`;

export default VertNavBar;
