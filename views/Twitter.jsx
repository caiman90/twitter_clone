var React = require('react'),
    AltContainer = require('alt/AltContainer'),
    TweetList = React.createFactory(require('../views/TweetList.jsx')),
    UserInfo = React.createFactory(require('../views/UserInfo.jsx')),
    TweetBox = React.createFactory(require('../views/TweetBox.jsx'));

var Twitter =  React.createClass({
    componentDidMount: function() {
        window.alert('rendered Twiiter');
    },
    render:function() {
        var style = {
            top_left_section : {
            display:'inline-block',
            position: 'absolute'
        },
        top_section:{
            marginLeft: '330px',
            border: '1px solid black',
            height: '75px',
            width:'522px'
        },
        bottom_section :{
            marginLeft: '330px',
            border: '1px solid black',
            marginTop: '20px',
            width:'522px'
        }
        };
        return (
            <div>
                <div style={style.top_left_section}>
                    <AltContainer>
                        <UserInfo user={this.props.user}/>
                    </AltContainer>
                </div>
                <div style={style.top_section}>
                    <AltContainer>
                        <TweetBox />
                    </AltContainer>
                </div>
                <div style={style.bottom_section}>
                    <AltContainer>
                        <TweetList tweets={this.props.tweets}/>
                    </AltContainer>
                </div>
            </div>

        ) }}
);

module.exports= Twitter;
