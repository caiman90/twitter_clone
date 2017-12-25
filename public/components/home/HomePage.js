/**
 * Created by rejhan on 16.12.2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import * as tweetActions from '../../actions/tweetActions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import TweetList from './TweetList';
import PostTweet from './PostTweet';

class HomePage extends  React.Component {
    constructor(props,context){
        super(props,context);
        debugger
        this.state = {
            tweet: {message:''},
        }
        this.postTweet = this.postTweet.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
    }

     tweetRow(tweet,index){
         return <div key={index}>{tweet.message}</div>;
     }
    postTweet(event) {
        this.props.actions.saveUserTweet(this.state.tweet);
    }
    onMessageChange(event){
        const tweet = this.state.tweet;
        tweet.message = event.target.value;
        this.setState({tweet:tweet});
    }
    render(){
        return (
            <div className="container-fluid">
                <PostTweet props={this} />
                <TweetList tweets={this.props.tweets} />
            </div>
        );
    }
}

HomePage.propTypes = {
    tweets: PropTypes.array.isRequired,
    actions:PropTypes.object.isRequired
}

function mapStateToProps(state){

    return {
        tweets : state.tweets
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(tweetActions,dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
