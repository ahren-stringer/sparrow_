import postReduser from "./postReduser";
import categoryReduser from "./categoryReduser";
import headerReduser from "./headerReduser";
import searchReduser from "./searchReduser";
import thunkMiddleware from "redux-thunk"
import authReduser from "./authReduser";
import { reducer as formReducer } from 'redux-form'
import popularReduser from "./popularReduser";
import profileReduser from "./profileReduser";
import publicationReduser from "./publicationReduser";
import blogReduser from "./blogReduser";
import chanelsReduser from "./chanelsReduser";

const { createStore, combineReducers, applyMiddleware } = require("redux");

let redusers= combineReducers({
    post: postReduser,
    categoryData:categoryReduser,
    header: headerReduser,
    search: searchReduser,
    auth: authReduser,
    form: formReducer,
    popularData:popularReduser,
    profile:profileReduser,
    publication: publicationReduser,
    blog:blogReduser,
    chanels:chanelsReduser
});

let store=createStore(redusers,applyMiddleware(thunkMiddleware));

export default store