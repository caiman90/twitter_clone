import * as types from './actionTypes';
import axios from 'axios';

export function saveTweet(tweet){
    return {type:types.SAVE_TWEET_SUCCESS,tweet};
}
export function loadTweetsSuccess(tweets) {
    return {type:types.LOAD_TWEETS_SUCCESS,tweets}
}
export function loadTweets(){
    return function (dispatch) {
        return axios.get('http://localhost:3000/api/tweets').then(tweets =>{
            dispatch(loadTweetsSuccess(tweets.data));
        }).catch(error => {
            throw(error);
        });
    }
}
export function saveUserTweet(tweet){
    return function (dispatch) {
        return axios.post('http://localhost:3000/api/tweet',tweet).then(tweet =>{
            dispatch(saveTweet(tweet.data))
        }).catch(error =>{
            throw (error);
        })
    }
}