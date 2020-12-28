<<<<<<< HEAD
import React from "react";
import styled from "styled-components";
=======
import { Link } from 'react-router-dom';
import styled from 'styled-components';
>>>>>>> 122503f07092a3e4afdd0c150602d6b3e2c45d0f
import {
    FaHome,
    FaSortDown,
    FaUsers,
    FaSms,
    FaUserFriends,
    FaGamepad,
} from "react-icons/fa";
import { slide as Menu } from "react-burger-menu";

const VertNavBar = () => {
<<<<<<< HEAD
    return (
        <StyledMain>
            <Menu width={"19rem"}>
                <div>
                    <div className='side-bar'>
                        <div className='logo'>
                            <span>Icon</span>
                            <span className='nav-title'>GSN</span>
                        </div>
                        <section className='search-field'>
                            <input type='text' placeholder='Search...'></input>
                        </section>
                        <div className='home-btn'>
                            <button>
                                <span>
                                    <FaHome />
                                </span>
                                <span className='home'>Home</span>
                            </button>
                        </div>
                        <div className='dropdown'>
                            <span className='nav-category'>
                                <span>Connect</span>
                                <span className='carrot-down'>
                                    <FaSortDown />
                                </span>
                            </span>
                            <div className='dropdown-content'>
                                <button>
                                    <span>
                                        <FaUsers />
                                    </span>
                                    <span className='dd-label'>Groups</span>
                                </button>
                                <button>
                                    <span>
                                        <FaSms />
                                    </span>
                                    <span className='dd-label'>Chat</span>
                                </button>
                                <button>
                                    <span>
                                        <FaUserFriends />
                                    </span>
                                    <span className='dd-label'>Friends</span>
                                </button>
                                <button>
                                    <span>
                                        <FaGamepad />
                                    </span>
                                    <span className='dd-label'>Games</span>
                                </button>
                            </div>
                        </div>
                        <div className='dropdown'>
                            <span className='nav-category'>
                                <span>Create</span>
                                <span className='carrot-down'>
                                    <FaSortDown />
                                </span>
                            </span>
                            <div className='dropdown-content'>
                                <button>
                                    <span>
                                        <FaUsers />
                                    </span>
                                    <span className='dd-label'>
                                        Create new Group
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Menu>
        </StyledMain>
    );
=======
  return (
    <StyledMain>
      <div>
        <div className='side-bar'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>News</Link>
            </li>
            <li>
              <Link to='/'>Contact</Link>
            </li>
            <li>
              <Link to='/'>About</Link>
            </li>
            <li>
              <Link to='/'>Donovan is cool</Link>
            </li>
          </ul>
        </div>
      </div>
    </StyledMain>
  );
>>>>>>> 122503f07092a3e4afdd0c150602d6b3e2c45d0f
};

const StyledMain = styled.main`
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
    }

    /* Color/shape of close button cross */
    .bm-cross {
        background: white;
    }
    @media all and (min-width: 700px) {
        .bm-burger-button {
            width: 3.5rem;
            height: 3rem;
            left: 4rem;
            top: 2rem;
        }
    }
    .side-bar {
        width: 19rem;
        height: 100%;
        position: fixed;
        overflow: auto;
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
            margin-top: 2rem;
            margin-left: 1rem;
        }

        .home {
            font-size: 2.2rem;
            margin-left: 1rem;
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
    }
`;

export default VertNavBar;
