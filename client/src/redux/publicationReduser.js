import { profileAPI } from "../DAL/api";

const SET_PHOTO='profile/SET-PHOTO';

let init = {
    photo:null,
};

const publicationReduser = (state = init, action) => {
    switch (action.type) {
            case SET_PHOTO:{
                return {...state, photo: action.photo}
              }
        default:
            return state
    }
}

export const setPhoto=(photo)=> ({type: SET_PHOTO, photo})

export const setPhotoThunk=(photo)=> async(dispatch) => {
    let res= await profileAPI.setPhoto(photo)
    dispatch(setPhoto(res))
  }

export default publicationReduser