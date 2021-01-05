import React, { Component } from 'react';
import ellipseIcon from './images/more-horizontal.svg';
import commentIcon from './images/message-square.svg';
import likeIcon from './images/thumbs-up.svg';

class ActivityFeedPost extends Component {
    render() {
        return (
            <li key={this.props.post.entity_id}>
                <img src={ellipseIcon} alt='More Options' className='ellipse' />
                <div className='post-user-info'>
                    <img
                        src='https://gaming-social-network.s3-us-west-2.amazonaws.com/avatar_placeholder.png'
                        alt='Avatar'
                        className='avatar'
                    ></img>
                    <h3>{this.props.post.username}</h3>
                </div>
                <div className='post-content'>
                    <p>{this.props.post.post_text}</p>
                </div>
                <div className='user-interactions'>
                    <div>
                        <img src={likeIcon} alt='Like' />
                        <img src={commentIcon} alt='Comment' />
                    </div>
                </div>
            </li>
        );
    }
}

export default ActivityFeedPost;
