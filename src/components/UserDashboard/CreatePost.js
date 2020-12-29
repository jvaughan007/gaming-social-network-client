import React, { Component } from 'react';

class CreatePost extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: "",
      youtube_url: "",
      image_url: "",
      public: "",
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      content,
      youtube_url,
      image_url,
      public,
    } = e.target;
    this.setState({ error: null });
    PostsApiService.postArticle({
      content: content.value,
      youtube_url: youtube_url.value,
      image_url: image_url.value,
      public: public.value,
    })
    .then((user) => {
      content.value = "";
      youtube_url.value = "";
      image_url.value = "";
      public.value = "";
      TokenService.saveAuthToken(user.authToken);
      this.props.history.push("/userdashboard");
    })
    .catch((res) => {
      this.setState({ error: res.error });
    });
  }

  handleChange = (evt) => {
    evt.preventDefault();
  }

    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <textarea
              type="text"
              placeholder="Write post here"
              name="activity-feed-post"
              onChange={this.handleChange}
              rows="8"
              cols="50"></textarea>
            
            </form>
          </div>
        );
    }
}

export default CreatePost
