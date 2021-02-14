const SET_CHANELS = 'chanelsReduser/SET-CHANELS';

let init = {
    chanels: null,
};

const chanelsReduser = (state = init, action) => {
    switch (action.type) {
        case SET_CHANELS:
            return { ...state, chanels: action.chanels }
        default:
            return state
    }
}

export const setChanels = (chanels) => ({ type: SET_CHANELS, chanels });

export default chanelsReduser