import { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { API_URL } from '../../config';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import { parse } from 'query-string';

const Groups = () => {
  const [groups, setGroups] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [invalidQuery, setInvalidQuery] = useState(false);
  let history = useHistory();
  const searchInput = useRef(null);
  let location = useLocation();

  useEffect(() => {
    const { search } = parse(location.search);

    setSearchQuery(search);

    const getGroups = async () => {
      try {
        const token = localStorage.getItem('jwt');
        setLoading(true);
        const res = await fetch(
          `${API_URL}/groups/filter?searchTerm=${search}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              authorization: `Bearer ${token}`
            }
          }
        );
        const data = await res.json();
        setGroups(data.filteredGroups);
        return setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getGroups();
  }, [location.search]);

  const handleSearchResults = () => {
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
      return (
        <h1 className='no-results'>Sorry there are no groups with that name</h1>
      );
    }
    return (
      <div className='results-found'>
        {groups.map((group, y) => {
          console.log(group);
          return (
            <div key={y} className='each-result'>
              <div className='group-info'>
                <h1>{group.group_name}</h1>
                <span>{group.slug}</span>
              </div>
              <button>+</button>
            </div>
          );
        })}
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim().length) {
      return setInvalidQuery(true);
    }
    return history.push(`/groups/filter?search=${searchQuery.trim()}`);
  };

  const handleInvalidQuery = () => {
    if (invalidQuery) {
      return (
        <div>
          <span>Enter a search query</span>
        </div>
      );
    }
  };

  const handleReset = () => {
    setSearchQuery('');
    setGroups(null);
    searchInput.current.value = '';
    return history.push('/groups/filter');
  };

  return (
    <div>
      {handleInvalidQuery()}
      <StyledForm>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              type='text'
              placeholder='Search a new group....'
              defaultValue={searchQuery}
              ref={searchInput}
              onChange={(e) => {
                setSearchQuery(e.currentTarget.value);
                setInvalidQuery(false);
              }}
            />
            {searchQuery ? (
              <button type='button' onClick={handleReset}>
                X
              </button>
            ) : null}
          </div>
          <button type='submit' className='search'>
            Search
          </button>
        </form>
      </StyledForm>

      <StyledResults>
        <div>{handleSearchResults()}</div>
      </StyledResults>
    </div>
  );
};

const StyledForm = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 4rem;

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
        border: solid 1px gray;
      }
    }
    .search {
      width: 24%;
      border: none;
      cursor: pointer;
      border-radius: 0.4rem;
      background: #9453d3;
      color: #fff;
      outline: none;
    }
  }
`;

const StyledResults = styled.div`
  color: white;
  margin-top: 2rem;

  .no-results {
    text-align: center;
  }

  .results-found {
    .each-result {
      display: flex;
      color: black;
      margin-top: 2rem;
      background-color: white;
      border-radius: 2rem;
      padding: 1rem;

      button {
        margin-left: 3rem;
        margin-top: 1.5rem;
        height: 3rem;
      }
    }
  }
`;
export default Groups;
