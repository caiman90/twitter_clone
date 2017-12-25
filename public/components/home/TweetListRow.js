import React from 'react';
import PropTypes from 'prop-types';

const TweetListRow = ({tweet})=>{

    return(
        <tr>
            <td>{tweet.message}</td>
            <td>{tweet.date}</td>
            <td>{tweet.author}</td>
        </tr>
    );
};

TweetListRow.propTypes = {
    tweet: PropTypes.object.isRequired
}
export default TweetListRow;