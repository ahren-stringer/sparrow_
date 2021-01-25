import * as axios from 'axios';

const SET_CATEGORY_DATA = 'categoryReuser/SET-CATEGORY-DATA';

let init = {
    categories: null,
};

const categoryReduser = (state = init, action) => {
    switch (action.type) {
        case SET_CATEGORY_DATA:
            return { ...state, categories: action.categories }
        default:
            return state
    }
}

export const setCategories = (categories) => ({ type: SET_CATEGORY_DATA, categories });

export default categoryReduser