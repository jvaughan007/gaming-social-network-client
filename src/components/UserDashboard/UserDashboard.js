// import VertNavBar from "../VerticalNavBar/VertNavBar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import React, { Component } from 'react';

class UserDashboard extends Component{
  constructor(props){
    super(props)
    this.state = {
      posts: [
        {
          user_id: 1,
          username: "@devilishgamer",
          userAvatar: "avatar.png",
          content: "I am the best gamer ever!",
        },
        {
          user_id: 2,
          username: "@kickassgamer",
          userAvatar: "avatar2.png",
          content:
            "I am the best gamer no one in the world is better than me. I’m bronze 4 but I know I could be Apex Predator if I had better teams.",
        },
      ],
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

  render(){
    return this.state.posts ? (
      <>
        <StyledWrapper>
          <StyledFeed className="dashboard-content">
            <FeedContent>
              {this.state.posts.map((post) => (
                <li key={post.user_id}>
                  <div className="post-user-info">
                    <img
                      src={post.userAvatar}
                      alt="Avatar"
                      class="avatar"
                    ></img>
                    <h3>{post.username}</h3>
                  </div>
                  <div className="post-content">
                    <p>{post.content}</p>
                  </div>
                  <div className="user-interactions">
                    {/* icons to flex-right */}
                  </div>
                </li>
              ))}
            </FeedContent>
          </StyledFeed>
        </StyledWrapper>
      </>
    ) : null;
  }
};


const StyledFeed = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;
const FeedContent = styled.ul`
  flex: 1;
  background-color: #f4f4f4;
  border-radius: 3px;
  padding: 5rem;

  li {
    background-color: white;
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;
    height: 20rem;
    margin-bottom: 2.4rem;
    padding: 3.2rem;

    .post-user-info {
      display: flex;
      
      h3 {
        color: #203758, 100%;
        font-family: Montserrat, sans-serif;
        line-height: 1.8rem;
        padding-bottom: 2rem;
        size: 1.5rem;
      }

      .avatar {
        border: 2rem;
        border-color: #f4f4f4;
        border-radius: 50%;
        height: 50px;
        margin-right: 2rem;
        width: 50px;
        vertical-align: middle;
      }
    }
    
    .post-content {
      p {
        color: #203758, 100%;
        font-family: Montserrat, sans-serif;
        line-height: 2.6rem;
        size: 1.4rem;
      }
    }
  }
`;
// 1rem = 10px

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