var React = require('react'),
    AltContainer = require('alt/AltContainer'),
    Tweet = require('./Tweet.jsx');
module.exports  = React.createClass({
     render :function(){
         return (
        <div>
                {this.props.tweets.map((tweet, i) => {
                    return ( <Tweet key={i} data={tweet}/> );
                    })}
            </div>
        );
    }
});
