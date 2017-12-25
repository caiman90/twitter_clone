import React from 'react';
import PropTypes from 'prop-types';
import TweetListRow from './TweetListRow';

const TweetList = ({tweets}) => {
    return(
        <table className="table">
            <thead>
                 <tr>
                 <th>Tweet message</th>
                 <th>Tweet time</th>
                 <th>Tweet Author</th>
                </tr>
            </thead>
            <tbody>
                {tweets.map((tweet,index) =>
                <TweetListRow key={index}  tweet={tweet}/>
                )}
            </tbody>
        </table>
    );
};

TweetList.propTypes = {
    tweets: PropTypes.array.isRequired
};

export default TweetList;