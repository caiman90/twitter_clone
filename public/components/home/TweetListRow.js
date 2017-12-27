import React from 'react';
import PropTypes from 'prop-types';

const TweetListRow = ({tweet})=>{

    return(
        <tr>
            <td> <img  className="img" src="/public/assets/reha.jpg" alt="Profile Pic" /></td>
            <td>{tweet.message}</td>
            <td>{tweet.date}</td>
            <td>{tweet.author} </td>

        </tr>
    );
};

TweetListRow.propTypes = {
    tweet: PropTypes.object.isRequired
}
export default TweetListRow;