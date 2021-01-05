import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
  

const AddComment = ({ entity_id }) => {
    console.log(entity_id);
  // const [comment, setComment] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     if (!comment.trim().length) {
  //       return;
  //     }
  //     const token = localStorage.getItem("jwt");
  //     const res = await fetch(`${API_URL}/posts`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify({ post_text: text }),
  //     });
  //     const data = await res.json();
  //     addPost(data.post);
  //     return setText("");
  //   } catch (err) {
  //     console.log(err);
  //     // handle error here
  //   }
  // };

  return (
    <StyledWrapper>
      <div className="add-comment-form">
        <form>
          {/* need to haves: entity_id , comment_text: comment,   */}
          <label>Add a comment</label>
          <div className="users-input">
            <input></input>
            {/* <textarea
                            type='text'
                            placeholder={`Comment`}
                            // value={text}
                            // onChange={(e) => setComment(e.target.value)}
                        /> */}
            <button>
              <FaPlus />
            </button>
          </div>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledForm = styled.div`
    form {
        width: 20rem;
        background-color: blue;
    }
`

const StyledWrapper = styled.main`
    .add-comment-form {
        color: white;
        .users-input {
            display: flex;
        }
    }
`;

export default AddComment;
