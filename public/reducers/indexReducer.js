import {combineReducers} from 'redux';
import tweets from './tweetReducer';

const rootReducer = combineReducers({
    tweets
});

export default rootReducer;