// import VertNavBar from "../VerticalNavBar/VertNavBar";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React, { Component } from 'react';
import VertNavBar from '../VerticalNavBar/VertNavBar';

class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          user_id: 1,
          username: '@devilishgamer',
          userAvatar: 'avatar.png',
          content: 'I am the best gamer ever!'
        },
        {
          user_id: 2,
          username: '@kickassgamer',
          userAvatar: 'avatar2.png',
          content:
            'I am the best gamer no one in the world is better than me. I’m bronze 4 but I know I could be Apex Predator if I had better teams.'
        }
      ]
    };
  }

  // componentDidMount = () => {
  //   fetch(`http://localhost:5000/posts`)
  //   .then(res => res.json())
  //   .then(res => {
  //     console.log(res);
  //     this.setState({
  //       posts: res.posts
  //     })
  //   })
  // }

  render() {
    return this.state.posts ? (
      <StyledContainer>
        <VertNavBar></VertNavBar>
        <StyledMain></StyledMain>
      </StyledContainer>
    ) : null;
  }
}

const StyledContainer = styled.div``;

const StyledMain = styled.main`
  width: calc(100vw - 20rem);
  background: ${({ theme }) => theme.colors.dark2};
  height: 100vh;
  float: right;
`;

export default UserDashboard;
