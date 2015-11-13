var React = require('react'),
    AltContainer = require('alt/AltContainer');

var UserInfo = React.createClass({

    render: function() {
        var style ={
            userinfo:{
            border:'1px solid blue',
            width:'300px',
            height: '150px',
            padding: '8px 5px 1px 5px'
            },
            user_info_image_div:{
            display:'inline-block'
            },
            user_info_details :{
                display: 'inline-block',
                position:'absolute',
                height:'140px'
            },
            user_info_details_item :{
               display:'block',
               height: '44px',
               paddingTop: '5px',
               fontSize:'12px',
               fontFamily: 'Arial Black'
           }
        };
        return (
            <div style={style.userinfo}>
            <div style={style.user_info_image_div}>
            <img src="/images/user.png"/>
            </div>
            <div  style={style.user_info_details}>
            <span style={style.user_info_details_item}>{this.props.user.name} { this.props.user.surname}</span>
                <span style={style.user_info_details_item}>{this.props.user.username}</span>
                <span style={style.user_info_details_item}>Tweets ({this.props.user.numOfTweets})</span>
            </div>
        </div>
        );
    }
});

module.exports = UserInfo;
