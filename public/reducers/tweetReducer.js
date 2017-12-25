import * as types from '../actions/actionTypes';

export default function tweetReducer(state=[],action) {
    switch(action.type){
        case types.LOAD_TWEETS_SUCCESS:
                return action.tweets;
        case types.SAVE_TWEET_SUCCESS:
            debugger
            return [...state,Object.assign({},action.tweet)];
            default:
                return state;

    }
    
}