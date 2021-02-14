const SET_CATEGORY_DATA = 'categoryReuser/SET-CATEGORY-DATA';
const SET_CATEGORY_SIDEBAR = 'categoryReuser/SET-CATEGORY-SIDEBAR';

let init = {
    categories: null,
    categoriesSidebar:null,
};

const categoryReduser = (state = init, action) => {
    switch (action.type) {
        case SET_CATEGORY_DATA:
            return { ...state, categories: action.categories }
            case SET_CATEGORY_SIDEBAR:
            return { ...state, categoriesSidebar: action.categoriesSidebar }
        default:
            return state
    }
}

export const setCategories = (categories) => ({ type: SET_CATEGORY_DATA, categories });
export const setCategoriesSidebar = (categoriesSidebar) => ({ type: SET_CATEGORY_SIDEBAR, categoriesSidebar });

export default categoryReduser