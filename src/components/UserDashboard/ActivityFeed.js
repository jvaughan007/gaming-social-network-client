import VertNavBar from "../VerticalNavBar/VertNavBar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import React, { Component } from 'react';
import styled from 'styled-components';


          
const ActivityFeed = ({ user_id, post }) => {
  const [username, setUserName] = React.useState(null);
  const [, setError] = React.useState(null);

  const { data} = React.useContext(UserContext);
  const {
        userComments,
        setCommentsByUserId,
        addNewComment,
    } = React.useContext(CommentsContext);

    const { formFields, handleOnChange } = useFormState({
        user_id: match.params.userID,
        comment: '',
     });

     React.useEffect(() => {
        const fetchComments = async () => {
            await setCommentsByUserId(match.params.userID);
            const user = await UserService.getUserById(match.params.userID);

            if (userComments && userComments[0]?.message) {
                setError(userComments[0].message);
            }

                 setUserName(user.username);
            };

             if (!userComments) {
                 fetchComments();
             }

             return () => {
                 setUserName('');
                setCommentsByUserId();
            };
        }, []);

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        formFields.user_name = data.username;
        const res = await CommentsService.postNewComment(formFields);

        if (res.error) {
            console.error(res);
            setError(res.error);
            return;
        }

        await addNewComment(res.newComment);
        formFields.comment = '';
    };

    const openEdit = data?.dev && (
        <div className="edit-button-holder">
            <button
                className="edit-button"
                onClick={() => {
                history.push(`/dashboard/edit/${match.params.userID}`);
             }}
         >
            Edit Post
         </button>
      </div>
    );

    const renderComments =
        userComments &&
        !userComments[0].message &&
        userComments.map((comment) => (
            <li className="comment-item" key={comment.id}>
                <div className="auth-and-comm">
                    <p className="comment-author">{`Author: ${comment.username}`}</p>
                    <p className="comment-content">
                        {`"`}
                        {comment.comment}
                        {`"`}
                    </p>
                </div>
            <div className="comment-time">
                <p>{comment.createdDate}</p>
            </div>
        </li>
    ));

    const commentField = CommentFields.getInputFields(
        formFields,
        handleOnChange,
    );

    return (
        <div className="comments-container">
            <button
                onClick={() => history.goBack()}
                className="go-back-button"
            >
                Back to Dashboard
            </button>
            <h3 className="welcome">{username}</h3>
            {openEdit}
            <ul className="comments">{renderComments}</ul>
            <form onSubmit={handleSubmit} className="new-comment-form">
                {commentField}
                <footer className="form-footer">
                    <button type="submit" className="new-comment-submit">
                        Submit
                    </button>
                </footer>
            </form>
        </div>
    );
}




/*const StyledFeed = styled.div`

  padding-top: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0d7377;
  form {
    width: 78rem;
    display: flex;
    flex-direction: column;
    textarea {
      width: 100%;
      height: 12rem;
      padding: 0.8rem;
      border-radius: 0.4rem 0.4rem 0 0;
      resize: none;
      outline: none;
    }
    div {
      height: 5.6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #212121;
      padding: 0.8rem;
      color: #fff;
      border-radius: 0 0 0.4rem 0.4rem;
      ul {
        display: flex;
        li {
          margin-right: 0.8rem;
          cursor: pointer;
        }
      }
      button {
        height: 4rem;
        border-radius: 0.4rem;
        width: 8rem;
        cursor: pointer;
        outline: none;
        border: none;
        color: #fff;
        background: #9453d3;
      }
    }
  }
`;

        const FeedContent = styled.ul`
  padding: 2.4rem;
  height: 100%;
  li {
    position: relative;
    background-color: white;
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;
    height: 20rem;
    margin-bottom: 2.4rem;
    padding: 3.2rem;
    width: 78rem;
    .ellipse {
      position: absolute;
      top: 0.8rem;
      right: 1.6rem;
      cursor: pointer;
    }
    .post-user-info {
      display: flex;
      align-items: center;
      h3 {
        color: #203758;
      }
      .avatar {
        border: 2rem;
        border-color: #212121;
        border-radius: 10rem;
        height: 4.8rem;
        margin-right: 0.8rem;
        width: 4.8rem;
      }
    }
    .post-content {
      p {
        margin-top: 1.6rem;
        color: #203758, 100%;
        line-height: 2rem;
        size: 1.4rem;
      }
    }
    .user-interactions {
      position: absolute;
      bottom: 0.8rem;
      right: 1.6rem;
      img {
        margin-left: 0.8rem;
        cursor: pointer;
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
*/

export default ActivityFeed;