var React = require('react'),
    moment = require('moment'),
    AltContainer = require('alt/AltContainer');

module.exports = React.createClass({

    render: function() {
        var style = {

            tweet: {
            marginTop:'10px',
            marginBottom:'10px',
            marginLeft:'10px',
            width:'500px',
            border: '1px solid black'
        },
        tweet_details_div:{
            display: 'inline-block',
        },
        tweet_details: {
            maxHeight: '400px',
            display: 'block',
            paddingTop: '5px',
            paddingBottom: '5px',
            marginLeft: '50px',
            wordBreak: 'break-word',
            maxWwidth: '500px'
        },
        tweet_user_image:{
            heigth:'50px',
            width:'50px',
            paddingTop:'5px'
        },
        tweet_image :{
            display: 'inline-block',
            maxHeight: '400px',
            position: 'absolute'
        }
        }
        return (
            <div style={style.tweet}>
                <div style={style.tweet_image}>
                <img style={style.tweet_user_image} src="/images/user.png"/>
                </div>
                <div style={style.tweet_details_div}>
                    <span style={style.tweet_details}>{this.props.data.username}  { moment(this.props.data.created_at).format('MMMM Do YYYY, h:mm:ss a')}</span>
                    <span style={style.tweet_details}>{this.props.data.content}</span>
                </div>
            </div>
        );
    }
});
