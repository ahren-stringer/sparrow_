const SET_POST = 'postReuser/SET-POST';
const SET_COMENTS = 'postReuser/SET_COMENTS'
const TOTAL_COUNT = 'postReuser/TOTAL-COUNT';
const SET_PAGE = 'postReuser/SET-PAGE';


let init = {
    post: null,
    coments: null,
    totalCount: null,
    numberOfPage: 1,
    onOnePage: 3,
};

const infoReduser = (state = init, action) => {
    switch (action.type) {
        case SET_POST:
            return { ...state, post: action.post }
        case SET_COMENTS:
            return { ...state, coments: action.coments }
            case TOTAL_COUNT:
            return { ...state, totalCount: action.totalCount }
        case SET_PAGE:
            return { ...state, numberOfPage: action.numberOfPage }
        default:
            return state
    }
}

export const setPost = (post) => ({ type: SET_POST, post });
export const setComents = (coments) => ({ type: SET_COMENTS, coments });
export const SetTotalCount = (totalCount) => ({ type: TOTAL_COUNT, totalCount })
export const SetPageCount = (numberOfPage) => ({ type: SET_PAGE, numberOfPage })

export default infoReduser