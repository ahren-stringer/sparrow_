const SET_POSTS = 'blogReuser/SET-POSTS';

let init = {
    posts: null,
};

const blogReduser = (state = init, action) => {
    switch (action.type) {
        case SET_POSTS:
            return { ...state, posts: action.posts }
        default:
            return state
    }
}

export const setPosts = (posts) => ({ type: SET_POSTS, posts });

export default blogReduser