const SET_USER = 'profileReuser/SET_USER';

let init = {
    user:null,
};

const profileReduser = (state = init, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.user }
        default:
            return state
    }
}

export const setUser = (user) => ({ type: SET_USER,user })

export default profileReduser