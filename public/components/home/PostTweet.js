import React from 'react';
import PropTypes from 'prop-types';

const PostTweetCont = ({props})=>{
    return(
        <div className="container-fluid">
            <h1>Post Tweets</h1>
            <input className="input" type="text" onChange={props.onMessageChange} value={props.state.tweet.message} />
            <input className="button" type="submit" value="Post tweet" onClick={props.postTweet}/>
        </div>
    );
};

PostTweetCont.propTypes = {
    props: PropTypes.object.isRequired
}
export default PostTweetCont;