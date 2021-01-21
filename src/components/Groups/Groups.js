import { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { API_URL } from '../../config';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import noImg from './images/no-image.png';
import { parse } from 'query-string';
import Sidebar from '../Sidebar/Sidebar';

const Groups = () => {
    const [groups, setGroups] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    let history = useHistory();
    const searchInput = useRef(null);
    let location = useLocation();

    useEffect(() => {
        const { search } = parse(location.search);

        setSearchQuery(search);
        // have to double to filter

        const getGroups = async () => {
            try {
                if (!search) {
                    const token = localStorage.getItem('jwt');
                    setLoading(true);
                    const res = await fetch(`${API_URL}/groups`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: `Bearer ${token}`,
                        },
                    });
                    const data = await res.json();
                    setGroups(data.groups);
                    return setLoading(false);
                } else if (search) {
                    const token = localStorage.getItem('jwt');
                    setLoading(true);
                    const res = await fetch(
                        `${API_URL}/groups?searchTerm=${search}`,
                        {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                authorization: `Bearer ${token}`,
                            },
                        }
                    );
                    const data = await res.json();
                    setGroups(data.groups);
                    return setLoading(false);
                }
            } catch (err) {
                console.log(err);
            }
        };
        getGroups();
    }, [location.search]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!searchQuery.trim().length) {
            return;
        }

        return history.push(`/groups?search=${searchQuery.trim()}`);
    };

    const handleReset = () => {
        setSearchQuery('');
        setGroups(null);
        searchInput.current.value = '';
        return history.push('/groups');
    };

    const renderSearchResults = () => {
        if (loading) {
            return (
                <Loader
                    type='TailSpin'
                    color='#14FFEC'
                    height={100}
                    width={100}
                    className='spinner'
                />
            );
        }

        if (!groups) {
            return;
        }

        if (groups && !groups.length) {
            return <h2 className='no-results'>No results found 😞</h2>;
        }

        return groups.map((group) => (
            <SearchResult
                key={group.id}
                onClick={() => history.push(`/group/${group.slug}`)}
            >
                <div className='image-wrapper'>
                    <img
                        src={
                            group.background_image
                                ? group.background_image
                                : noImg
                        }
                        alt={group.name}
                    />
                </div>
                <div className='group-info'>
                    <h3>{group.group_name}</h3>
                </div>
            </SearchResult>
        ));
    };

    return (
        <StyledMain>
            <nav>
                <Sidebar />
            </nav>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type='text'
                        placeholder='search for a group...'
                        defaultValue={searchQuery}
                        ref={searchInput}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && searchQuery.trim().length ? (
                        <button type='button' onClick={handleReset}>
                            X
                        </button>
                    ) : null}
                </div>

                <button type='submit'>Search</button>
            </form>
            <SearchResults>{renderSearchResults()}</SearchResults>
        </StyledMain>
    );
};

const SearchResults = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1.6rem;
    margin-top: 3.2rem;
    margin-left: 15%;
    position: relative;

    .no-results {
        text-align: center;
        position: absolute;
        width: 100%;
        color: #14ffec;
    }

    .spinner {
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const SearchResult = styled.div`
    background: #323232;
    height: 26rem;
    border-radius: 0.4rem;
    position: relative;
    cursor: pointer;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);

    :hover {
        transform: scale(1.05);
    }

    .image-wrapper {
        position: relative;
        width: 100%;
        height: 70%;
        overflow: hidden;

        img {
            border-radius: 0.4rem 0.4rem 0 0;
            object-fit: cover;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
    }

    .group-info {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30%;

        h3 {
            text-align: center;
            color: #fff;
        }
    }
`;

const StyledMain = styled.main`
    margin-top: 3.2rem;

    nav {
        position: fixed;
        left: 0;
        top: 0;
    }

    form {
        display: flex;
        height: 4.8rem;
        justify-content: space-between;

        div {
            height: 100%;
            width: 74%;
            position: relative;

            input {
                padding-left: 0.8rem;
                border: none;
                border-radius: 0.4rem;
                outline: none;
                width: 100%;
                height: 100%;
            }

            button {
                position: absolute;
                top: 1.1rem;
                right: 1.6rem;
                width: 2.4rem;
                border-radius: 20rem;
                height: 2.4rem;
                background: gray;
            }
        }

        button {
            width: 24%;
            border: none;
            cursor: pointer;
            border-radius: 0.4rem;
            background: #9453d3;
            color: #fff;
            outline: none;
        }

        @media (min-width: 576px) {
            margin-left: 15%;
            div {
                width: 83%;

                input {
                    width: 100%;
                }
            }

            button {
                width: 16%;
            }
        }

        @media (min-width: 1200px) {
            div {
                width: 89.5%;
            }

            button {
                width: 10%;
            }
        }
    }
`;

export default Groups;
