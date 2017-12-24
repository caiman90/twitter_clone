/**
 * Created by rejhan on 16.12.2017.
 */
/**
 * Created by rejhan on 15.12.2017.
 */
import React from 'react';

class HomePage extends  React.Component {
    constructor(props,context){
        super(props,context);

        this.state = {
            tweet: {message:''},
            tweets: []

        }

    }

    onPostTweet(event){
         alert(`Saving tweet' + ${this.state.tweet.message}`)
    }
     onMessageChange(event){
        const tweetToPost = this.state.tweet;
        tweetToPost.message = event.target.value;
        this.setState({tweet:tweetToPost});
     }

    render(){
        return (
            <div className="container-fluid">
                <h1>Twitter Home Page Component</h1>
                <input className="input" type="text" onChange={this.onMessageChange.bind(this)} value={this.state.tweet.message} />
                <input className="button" type="submit" value="Post tweet" onClick={this.onPostTweet.bind(this)}/>
            </div>
        );
    }
}

export default HomePage;
