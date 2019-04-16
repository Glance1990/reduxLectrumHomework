// Types
import { types } from './types';

// Instruments
import { api } from '../../REST';

export const postsActions = {

    fillPosts: (posts) => {
        return {
            type:    types.FILL_POSTS,
            payload: posts,
        };
    },
    createPost: (post) => {
        return {
            type:    types.CREATE_POST,
            payload: post,
        };
    },
    clearPosts: () => {
        return {
            type: types.CLEAR_POSTS,
        };
    },
    removePost: (postId) => {
        return {
            type:    types.REMOVE_POST,
            payload: postId,
        };
    },
    likePost: (likedPost) => {
        return {
            type:    types.LIKE_POST,
            payload: likedPost,
        };
    },
    unlikePost: (likedPost) => {
        return {
            type:    types.UNLIKE_POST,
            payload: likedPost,
        };
    },

    // Async
    fetchPostsAsync: () => {
        return {
            type: types.FETCH_POST_ASYNC,
        };
    },
    createPostAsync: (comment) => {
        return {
            type:    types.CREATE_POST_ASYNC,
            payload: comment,
        };
    },
    removePostAsync: (commentId) => {
        return {
            type:    types.REMOVE_POST_ASYNC,
            payload: commentId,
        };
    },
    likePostAsync: (commentId) => {
        return {
            type:    types.LIKE_POST_ASYNC,
            payload: commentId,
        };
    },
    unlikePostAsync: (commentId) => {
        return {
            type:    types.UNLIKE_POST_ASYNC,
            payload: commentId,
        };
    },
};
