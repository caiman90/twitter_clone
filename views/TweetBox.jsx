var React = require('react'),
    AltContainer = require('alt/AltContainer');


module.exports = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
       window.alert('rendered');
    },
    add: function(event){
        console.log(event.target.value);
        if(event.keyCode == 13 && event.target.value.length > 0){
            console.log(event.target.value);
        }
    },
    handleClickEvent:function(){
        window.alert('hsda');
        //console.log(event.target.value);
        //if(event.target.value === 'Please enter your tweet and press enter!'){
        //    event.target.value = '';
        //}
    },
    render: function() {
        var tweetinput ={
            width: '400px',
            height: '50px',
            marginTop: '10px',
            marginLeft: '10px'
        };
        return <div>
            <input type="text" style={tweetinput} onClick={this.handleClickEvent}></input>
            <input type="button" style={tweetinput} onClick={this.handleClickEvent}></input>

        </div>

    },


});

