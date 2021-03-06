import React from 'react';
import PropTypes from 'prop-types';

const PostTweet = ({props})=>{
    return(
        <div className="tweet-component">
            <img  className="img" src="/public/assets/reha.jpg" alt="Profile Pic" />
            <textarea className="input" type="text" onChange={props.onMessageChange} value={props.state.tweet.message} />
            <input className="button" type="submit" value="Post tweet" onClick={props.postTweet}/>
        </div>
    );
};

PostTweet.propTypes = {
    props: PropTypes.object.isRequired
}
export default PostTweet;