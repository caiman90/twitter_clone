import * as types from '../actions/actionTypes';

export default function tweetReducer(state=[],action) {
    switch(action.type){
        case types.POST_TWEET:
            return [...state,
                Object.assign({},action.tweet)
            ];

            default:
                return state;

    }
    
}