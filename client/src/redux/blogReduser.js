const SET_POSTS = 'blogReuser/SET-POSTS';
const TOTAL_COUNT = 'blogReuser/TOTAL-COUNT';
const SET_PAGE = 'blogReuser/SET-PAGE';
const SET_LOADED = 'blogReuser/SET_LOADED';

let init = {
    posts: null,
    postsloaded: true,
    totalCount: null,
    numberOfPage: 1,
    onOnePage: 3,
};

const blogReduser = (state = init, action) => {
    switch (action.type) {
        case SET_POSTS:
            return { ...state, posts: action.posts }
        case TOTAL_COUNT:
            return { ...state, totalCount: action.totalCount }
        case SET_PAGE:
            return { ...state, numberOfPage: action.numberOfPage }
            case SET_LOADED:
                return { ...state, postsloaded: action.postsloaded }
        default:
            return state
    }
}

export const setPosts = (posts) => ({ type: SET_POSTS, posts });
export const SetTotalCount = (totalCount) => ({ type: TOTAL_COUNT, totalCount })
export const SetPageCount = (numberOfPage) => ({ type: SET_PAGE, numberOfPage })
export const setLoaded = (postsloaded) => ({ type: SET_LOADED, postsloaded })

export default blogReduser