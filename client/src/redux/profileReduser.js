const SET_USER = 'profileReuser/SET_USER';
const SET_POSTS = 'profileReuser/SET-POSTS';
let init = {
    user:null,
    posts: null,
};

const profileReduser = (state = init, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.user }
            case SET_POSTS:
            return { ...state, posts: action.posts }
        default:
            return state
    }
}

export const setUser = (user) => ({ type: SET_USER,user })
export const setPosts = (posts) => ({ type: SET_POSTS, posts });

export default profileReduser