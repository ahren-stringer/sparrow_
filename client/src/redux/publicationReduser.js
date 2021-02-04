import { profileAPI } from "../DAL/api";

const SET_FONTED_ID = 'publication/SET_FONTED_ID';
const SET_FONT_SIZE = 'publication/SET_FONT_SIZE';
const SET_COPIED_TEXT = 'publication/SET_COPIED_TEXT';
const SET_UNDERLINED_ID = 'publication/SET_UNDERLINED_ID';

let init = {
    file: {},
    fileNumber: 1,
    title: null,
    content: null,
    contentText: '',
    chose: [],
    bold: false,
    italized: false,
    underlined: false,
    underlinedId: 0,
    copiedText: '',
    textNodeId: 0,
    fontSize: '',
    fonts: [8, 10, 11, 12, 14, 15, 16, 18, 24, 36, 48],
    fontedId: 0,
    isClosed: true
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
        case SET_UNDERLINED_ID: {
            return { ...state, underlinedId: action.underlinedId }
        }
        default:
            return state
    }
}

export const setFontedId = (fontedId) => ({ type: SET_FONTED_ID, fontedId })
export const setFontSize = (fontSize) => ({ type: SET_FONT_SIZE, fontSize })
export const setCopiedText = (copiedText) => ({ type: SET_COPIED_TEXT, copiedText })
export const setUnderlinedId = (underlinedId) => ({ type: SET_UNDERLINED_ID, underlinedId })

// let changeFontSize = (_obj_name, fontSize, copiedText) => {
//     
// };// /insert_tag

// let insert_tag=(_obj_name, _tag_start, _tag_end, copiedText) =>{
//     
// };// /insert_tag

export const getSelectedText = () => {
    if (window.getSelection) {
        let { anchorNode, anchorOffset, focusNode, focusOffset } = document.getSelection();
        let text = window.getSelection().toString()
        return { anchorNode, anchorOffset, focusNode, focusOffset, text }
    } else if (document.selection) {
        return document.selection.createRange().text;
    }
    return '';
}
const standartStyleTag = '';
export const ChangeFontSizeThunk = (_obj_id, fontSize, copiedText, fontedId) =>
    async (dispatch) => {
        // берем объект
        var area = document.getElementById(_obj_id);
        let start = copiedText.anchorOffset;
        let end = copiedText.focusOffset;
        let count = 0
        if (area.childNodes.length != 1) {
            for (let i = 0; i < area.childNodes.length; i++) {
                if (area.childNodes[i] != copiedText.anchorNode) {
                    ++count
                    if (area.childNodes[i].nodeType == 3) {
                        let a = area.childNodes[i];
                        debugger
                        start += area.childNodes[i].textContent.length
                        end += area.childNodes[i].textContent.length
                    } else {
                        let a = area.childNodes[i];
                        start += area.childNodes[i].outerHTML.length
                        end += area.childNodes[i].outerHTML.length
                    }
                } else break
            }
        }
        if (document.getSelection) {// берем все, что до выделения
            area.innerHTML = area.innerHTML.substring(0, start) +
                // вставляем стартовый тег
                '<span style="font-size : ' + fontSize + 'px">' +
                // вставляем выделенный текст
                copiedText.text +
                // вставляем закрывающий тег
                '</span>' +
                // вставляем все, что после выделения
                area.innerHTML.substring(end, area.innerHTML.length);
            //this.setState({ textNodeId: this.state.textNodeId + 2 })
        }
        // Иначе заплатка для Internet Explorer
        else {// берем текст
            var selectedText = document.selection.createRange().text;
            // ЕСЛИ имеется какой-то выделенный текст, ТО
            if (selectedText != '') {// составляем новый текст
            }
        }
    }
export const DecorateTextThunk = (_obj_name, nodeName, copiedText) =>
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
        var area = copiedText.anchorNode.parentNode;
        let start = copiedText.anchorOffset;
        let end = copiedText.focusOffset;
        let count = 0
        if (area.childNodes.length != 1) {
            for (let i = 0; i < area.childNodes.length; i++) {
                if (area.childNodes[i] != copiedText.anchorNode) {
                    ++count
                    if (area.childNodes[i].nodeType == 3) {
                        start += area.childNodes[i].textContent.length
                        end += area.childNodes[i].textContent.length
                    } else {
                        start += area.childNodes[i].outerHTML.length
                        end += area.childNodes[i].outerHTML.length
                    }
                } else break
            }
        }
        let decorParent = copiedText.anchorNode.parentNode.closest(nodeTag);
        if (document.getSelection) {
            debugger
            if (
                decorParent &&
                nodeName === copiedText.anchorNode.decorParent.nodeName
                && copiedText.text === copiedText.anchorNode.decorParent.textContent
            ) {
                decorParent.outerHTML = decorParent.innerHTML
                // area.innerHTML = area.innerHTML.substring(0, start) +
                // // вставляем закрывающий тег
                // '</em>' +
                // // вставляем выделенный текст
                // copiedText.text +
                // // вставляем стартовый тег
                // '<em>' +
                // // вставляем все, что после выделения
                // area.innerHTML.substring(end, area.innerHTML.length);
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
        else {// берем текст
            var selectedText = document.selection.createRange().text;
            if (selectedText != '') {// составляем новый текст
                var newText = _tag_start + selectedText + _tag_end;
                document.selection.createRange().text = newText;
            }
        }
    }
export const AddImageThunk = (_obj_name, src, copiedText) =>
    async (dispatch) => {
        // берем объект
        var area = document.getElementsByName(_obj_name).item(0);
        let start = copiedText.anchorOffset;
        let end = copiedText.focusOffset;
        let count = 0
        if (area.childNodes.length != 1) {
            for (let i = 0; i < area.childNodes.length; i++) {
                if (area.childNodes[i] != copiedText.anchorNode) {
                    ++count
                    if (area.childNodes[i].nodeType == 3) {
                        let a = area.childNodes[i];
                        debugger
                        start += area.childNodes[i].textContent.length
                        end += area.childNodes[i].textContent.length
                    } else {
                        let a = area.childNodes[i];
                        start += area.childNodes[i].outerHTML.length
                        end += area.childNodes[i].outerHTML.length
                    }
                } else break
            }
        }
        if (document.getSelection) {// берем все, что до выделения
            area.innerHTML = area.innerHTML.substring(0, start) +
                // вставляем стартовый тег
                '<img src="' + src + '"/>' +
                // вставляем все, что после выделения
                area.innerHTML.substring(end, area.innerHTML.length);
            //this.setState({ textNodeId: this.state.textNodeId + 2 })
        }
        // Иначе заплатка для Internet Explorer
        else {// берем текст
            var selectedText = document.selection.createRange().text;
            // ЕСЛИ имеется какой-то выделенный текст, ТО
            if (selectedText != '') {// составляем новый текст
            }
        }
    }

export default publicationReduser