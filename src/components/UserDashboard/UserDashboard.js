// import VertNavBar from "../VerticalNavBar/VertNavBar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import React, { Component } from 'react';

class UserDashboard extends Component{
  constructor(props){
    super(props)
    this.state = {
      posts: []
    };
  }

  componentDidMount = () => {
    fetch(`http://localhost:3000/posts`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({
        posts: res
      })
    })
  }

  render(){
    return (
      <>
        <StyledWrapper>
          <StyledFeed className="dashboard-content">
            <FeedContent>
              <ul>
                {this.state.posts.map((post, index) => (
                  <li key={post.user_id + index}>
                    <h3>{post.image_url}</h3>
                    <h4>{post.youtube_url}</h4>
                    <p>{post.content}</p>
                  </li>
                ))}
              </ul>
            </FeedContent>
          </StyledFeed>
        </StyledWrapper>
      </>
    );
  }
};

const StyledFeed = styled.div`
  width:  80%;
  background-color: aqua;
  height: 202px;
  border: 1px;
  border-color: black;
  `
const FeedContent = styled.div`
  color: blue;
  `

const StyledWrapper = styled.div`
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
`;

export default UserDashboard;