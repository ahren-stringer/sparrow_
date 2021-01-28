const SET_POST = 'postReuser/SET-POST';


let init = {
    post: null,
};

const infoReduser = (state = init, action) => {
    switch (action.type) {
        case SET_POST:
            return { ...state, post: action.post }
        default:
            return state
    }
}

export const setPost = (post) => ({ type: SET_POST, post });

export default infoReduser