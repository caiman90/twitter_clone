/**
 * Created by rejhan on 16.12.2017.
 */
/**
 * Created by rejhan on 15.12.2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import * as tweetActions from '../../actions/tweetActions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';

class HomePage extends  React.Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            tweet: {message:''},
            tweets: []
        }
        this.postTweet = this.postTweet.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
    }

    postTweet(event){
        this.props.actions.postTweet(this.state.tweet);
        const tweet = this.state.tweet;
        tweet.message = '';
        this.setState({tweet:tweet})
    }
     onMessageChange(event){
        const tweet = this.state.tweet;
        tweet.message = event.target.value;
        this.setState({tweet:tweet});
     }
     tweetRow(tweet,index){
         return <div key={index}>{tweet.message}</div>;
     }

    render(){
        return (
            <div className="container-fluid">
                <h1>Tweets</h1>
                <input className="input" type="text" onChange={this.onMessageChange} value={this.state.tweet.message} />
                <input className="button" type="submit" value="Post tweet" onClick={this.postTweet}/>

                {this.props.tweets.map(this.tweetRow)}

            </div>
        );
    }
}
HomePage.propTypes = {
    tweets: PropTypes.array.isRequired,
    actions:PropTypes.object.isRequired
}

function mapStateToProps(state,ownProps){
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
