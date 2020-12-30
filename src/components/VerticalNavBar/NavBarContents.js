import React from "react";
import {
    FaHome,
    FaSortDown,
    FaUsers,
    FaSms,
    FaUserFriends,
    FaGamepad,
    FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavBarContents(props) {
    return (
        <div>
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
                        <Link
                            to='/dashboard'
                            onClick={(event) => event.preventDefault()}
                        >
                            <button>
                                <span>
                                    <FaHome />
                                </span>
                                <span className='home'>Home</span>
                            </button>
                        </Link>
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
                    <div className='home-btn'>
                        <button>
                            <span>
                                <FaSignOutAlt />
                            </span>
                            <span className='home'>Log Out</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
