import React, { Component } from 'react';
import youtubeIcon from "./images/youtube.svg";
import imageIcon from "./images/image.svg";
import { API_JWT_TOKEN, API_URL } from '../../config'

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post_text: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { post_text } = this.state;
    console.log(post_text);
    this.setState({ error: null });
    // @POST
    try {
      const res = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${API_JWT_TOKEN}`
        },
        body: JSON.stringify({text: post_text})  
      });
      const data = await res.json();
      console.log(data);
      // do something with the data here
    } catch(err) {
      console.log(err);
      // handle error here
    }
      // .then((user) => {
      //   content.value = "";
      //   youtube_url.value = "";
      //   image_url.value = "";
      //   public.value = "";
      //   TokenService.saveAuthToken(user.authToken);
      //   this.props.history.push("/userdashboard");
      // })
      // .catch((res) => {
      //   this.setState({ error: res.error });
      // });
  };

  handleChange = (evt) => {
    evt.preventDefault();
  };


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea type="text" placeholder={`What's new?`} onChange={e => this.setState({post_text: e.target.value})} />
          <div>
            <ul>
              <li>
                <img src={youtubeIcon} alt="Youtube" />
              </li>
              <li>
                <img src={imageIcon} alt="Upload" />
              </li>
            </ul>
            <button type="submit">Post</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePost;
