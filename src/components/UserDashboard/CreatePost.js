import React, { Component } from 'react';
import youtubeIcon from "./images/youtube.svg";
import imageIcon from "./images/image.svg";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      // youtube_url: "",
      // image_url: "",
      // public: "",
    };
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { content, youtube_url, image_url, public } = e.target;
  //   this.setState({ error: null });
  //   PostsApiService.postArticle({
  //     content: content.value,
  //     youtube_url: youtube_url.value,
  //     image_url: image_url.value,
  // 
  //   })
  //     .then((user) => {
  //       content.value = "";
  //       youtube_url.value = "";
  //       image_url.value = "";
  //       public.value = "";
  //       TokenService.saveAuthToken(user.authToken);
  //       this.props.history.push("/userdashboard");
  //     })
  //     .catch((res) => {
  //       this.setState({ error: res.error });
  //     });
  // };

  handleChange = (evt) => {
    evt.preventDefault();
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea type="text" placeholder={`What's new?`} />
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

export default CreatePost
