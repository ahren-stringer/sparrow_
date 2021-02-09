import axios from "axios";

const SET_POPULAR = 'popularReuser/SET_POPULAR';
const SET_POPULAR_SLIDER = 'popularReuser/SET_POPULAR_SLIDER';

let init = {
    popular:null,
    popularSlider:null
};

const popularReduser = (state = init, action) => {
    switch (action.type) {
        case SET_POPULAR_SLIDER:
            return { ...state, popularSlider: action.popularSlider }
        case SET_POPULAR:
            return { ...state, popular: action.popular }
        default:
            return state
    }
}

export const SetPopularSlider = (popularSlider) => ({ type: SET_POPULAR_SLIDER, popularSlider })
export const setPopular = (popular) => ({ type: SET_POPULAR, popular });

export const setPopularSliderThunk=()=>
    async (dispatch)=>{
        const req = await axios.get('http://localhost:8001/popular/some');
        dispatch(SetPopularSlider(req.data))
  }

export default popularReduser