import { baseURL, imagesAPI, publicationAPI } from "../DAL/api";

const SET_FONTED_ID = 'publication/SET_FONTED_ID';
const SET_FONT_SIZE = 'publication/SET_FONT_SIZE';
const SET_COPIED_TEXT = 'publication/SET_COPIED_TEXT';
const CHANGE_FONT_SIZE = 'publication/CHANGE_FONT_SIZE';
const SETED_CATEGORIES = 'publication/SETED_CATEGORIES';
const SET_FILE = 'publication/SET_FILE';
const SET_IMAGE = 'publication/SET_IMAGE';
const SET_IMAGE_TITLE = 'publication/SET_IMAGE_TITLE';

let init = {
    title: null,
    content: null,
    contentText: '',
    chose: [],
    bold: false,
    copiedText: '',
    fontSize: '',
    fonts: [8, 10, 11, 12, 14, 15, 16, 18, 24, 36, 48],
    isClosed: true,
    setedCategories: [],

    file:null,
    image:'',
    imageTitle:''
};

const publicationReduser = (state = init, action) => {
    switch (action.type) {
        case SET_FONTED_ID: {
            return { ...state, fontedId: action.fontedId }
        }
        case SET_FONT_SIZE: {
            return { ...state, fontSize: action.fontSize }
        }
        case SET_COPIED_TEXT: {
            return { ...state, copiedText: action.copiedText }
        }
        case SET_FILE: {
            return { ...state, file: action.file }
        }
        case SET_IMAGE: {
            return { ...state, image: action.image }
        }
        case SET_IMAGE_TITLE: {
            return { ...state, imageTitle: action.imageTitle }
        }

        case CHANGE_FONT_SIZE: {

        }
        case SETED_CATEGORIES: {
            let a = action.prev;
            let b = action.one
            a.push(b);
            return { ...state, setedCategories: a }
        }
        default:
            return state
    }
}

export const setFontSize = (fontSize) => ({ type: SET_FONT_SIZE, fontSize })
export const setCopiedText = (copiedText) => ({ type: SET_COPIED_TEXT, copiedText })

const setFile = (file) => ({ type: SET_FILE, file })
const setImage = (image) => ({ type: SET_IMAGE, image })
const setImageTitle = (imageTitle) => ({ type: SET_IMAGE_TITLE, imageTitle })

export const setCategory = (prev, one) => ({ type: SETED_CATEGORIES, prev, one })

function findText(copiedText) {
    var area = document.getElementsByName('content').item(0);
    let start = copiedText.anchorOffset;
    let end = copiedText.focusOffset;
    if (area.childNodes.length !== 1) {
        for (let i = 0; i < area.childNodes.length; i++) {
            if (area.childNodes[i] !== copiedText.anchorNode) {
                if (area.childNodes[i].nodeType === 3) {
                    start += area.childNodes[i].textContent.length
                    end += area.childNodes[i].textContent.length
                } else {
                    start += area.childNodes[i].outerHTML.length
                    end += area.childNodes[i].outerHTML.length
                }
            } else break
        }
    }
    return [area, start, end]
}

export const MainImgThunk = (file) =>
    async (dispatch) => {
        dispatch(setFile(file));
        const reader = new FileReader();
        reader.onload = (e) => {
            dispatch(setImageTitle(e.target.result))
        }
        reader.readAsDataURL(file)
        let res = await publicationAPI.setImg(file,this.state.date)
        dispatch( setImage(res.img) )
    }

export const ChangeFontSizeThunk = (fontSize, copiedText) => {
    // находим выделенный текст
    let [area, start, end] = findText(copiedText)
    area.innerHTML = area.innerHTML.substring(0, start) +
        // вставляем стартовый тег
        '<span style="font-size : ' + fontSize + 'px">' +
        // вставляем выделенный текст
        copiedText.text +
        // вставляем закрывающий тег
        '</span>' +
        // вставляем все, что после выделения
        area.innerHTML.substring(end, area.innerHTML.length);
}
export const DecorateTextThunk = (nodeName, copiedText) =>
    async (dispatch) => {
        let _tag_start = '';
        let _tag_end = '';
        let nodeTag = nodeName.toLowerCase();
        if (nodeName === 'SPAN') {
            _tag_start = '<' + nodeTag + ' class="bold" style="font-weigth: 700">';
            _tag_end = '</' + nodeTag + '>';
        } else {
            _tag_start = '<' + nodeTag + ' class="' + nodeTag + '">';
            _tag_end = '</' + nodeTag + '>';
        }
        // берем объект
        let [area, start, end] = findText(copiedText)
        let decorParent = copiedText.anchorNode.parentNode.closest(nodeTag);
        if (document.getSelection) {
            debugger
            if (
                decorParent &&
                nodeName === copiedText.anchorNode.decorParent.nodeName
                && copiedText.text === copiedText.anchorNode.decorParent.textContent
            ) {
                decorParent.outerHTML = decorParent.innerHTML
            } else {
                area.innerHTML = area.innerHTML.substring(0, start) +
                    // вставляем стартовый тег
                    _tag_start +
                    // вставляем выделенный текст
                    copiedText.text +
                    // вставляем закрывающий тег
                    _tag_end +
                    // вставляем все, что после выделения
                    area.innerHTML.substring(end, area.innerHTML.length);
            }
        }
    }
export const AddImageThunk = (_obj_name, src, copiedText) =>
    async (dispatch) => {
        // берем объект
        let [area, start, end] = findText(copiedText)

        const removeHandler = async (event) => {
            let target = event.target;
            let block = target.closest('.preview-image');
            block.classList.add('removing')
            setTimeout(() => block.remove(), 300)
            await imagesAPI.deleteImg(src)
        }

        if (document.getSelection) {// берем все, что до выделения
            area.innerHTML = area.innerHTML.substring(0, start) +
                `
                    <div class="preview-image" >
                        <div class="preview-remove" data-name="${src}">&times;</div>
                        <img src="${baseURL}publication_image/public/posts/${src}" alt="${src}" />
                    </div>
                `
            area.innerHTML.substring(end, area.innerHTML.length);
        }
        document.querySelector(`[data-name="${src}"]`).onclick = removeHandler
    }



export default publicationReduser