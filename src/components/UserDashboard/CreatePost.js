import React, { Component } from 'react';

class CreatePost extends Component {
  //simple form with 

    render() {
        return (
          <div>
            <form>
              <div className="form-item">
                <input type="text" required>
                  Post Title
                </input>
              </div>

              <div className="form-item">
                <textarea
                  id="post-message"
                  type="text"
                  placeholder="Post Message"
                  name="event_description"
                
                  rows="8"
                  cols="50"
                ></textarea>
              </div>
            </form>
          </div>
        );
    }
}

export default CreatePost
