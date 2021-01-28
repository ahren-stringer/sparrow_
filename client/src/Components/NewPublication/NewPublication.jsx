import axios from 'axios';
import { useState } from 'react';
import React from 'react';
import { Button, CircularProgress, Menu, MenuItem } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './NewPublication.css'

class NewPublication extends React.Component {

    constructor(props) {
        debugger
        super(props);
        this.state = {
            file: null,
            title: null,
            content: null,
            contentText: '',
            categories: this.props.categories,
            chose: [],
            bold: false,
            italized: false,
            underlined: false,
            underlinedId: 0,
            copiedText: '',
            textNodeId: 0
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);

        // Форматирование

        this.contentRef = React.createRef();
        //this.outputRef = React.createRef();

        this.onBoldClick = this.onBoldClick.bind(this);
        this.onItalicsClick = this.onItalicsClick.bind(this);
        this.onUnderlineClick = this.onUnderlineClick.bind(this);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.categories != this.props.categories) {
            this.setState({
                categories: this.props.categories
            })
        }
    }
    onFormSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('myfile', this.state.file);
        formData.append('title', this.state.title);
        formData.append('content', this.state.content);
        formData.append('categories', this.arr)
        console.log(formData)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("http://localhost:8001/posts", formData, config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
            });
    }

    onChange(e) {
        this.setState({ file: e.target.files[0] });
        console.log(e.target.files[0])
    }
    onInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onContentChange(e) {
        const contentOld = this.state.contentText;
        const contentNew = this.contentRef.current.innerText;
        const newText = contentNew.slice(contentOld.length);
        //this.formatText(newText);
        this.setState({ contentText: e.target.innerText });
        this.setState({ [e.target.name]: e.target.innerHTML });
    }
    useStyles = makeStyles((theme) => ({
        root: {
            width: 500,
            '& > * + *': {
                marginTop: theme.spacing(3),
            },
        },
    }));
    arr = []
    getBase64Image = (img) => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");

        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }

    // Форматирование

    onBoldClick(event) {
        //event.target.setAttribute("class", !this.state.bold ? "Selected" : "");
        this.setState({underlinedId: ++this.state.underlinedId})
        let openTag = '<em id="em_'+ this.state.underlinedId + '">'
        if (this.state.copiedText !== '') this.insert_tag('content',openTag,'</em>', this.state.copiedText)
        // if (!this.state.bold) {
        //     this.outputRef.current.innerHTML += "<strong></strong>";
        // }
        debugger
        this.setState({
            bold: !this.state.bold
        });
        this.setState({ copiedText: '' })
        this.contentRef.current.focus();
    }
    onItalicsClick(event) {
        event.target.setAttribute("class", !this.state.italized ? "Selected" : "");
        this.setState({
            italized: !this.state.italized
        });
    }
    onUnderlineClick(event) {
        event.target.setAttribute("class", !this.state.underlined ? "Selected" : "");
        this.setState({
            underlined: !this.state.underlined
        });
    }
    insert_tag(_obj_name, _tag_start, _tag_end, copiedText)
    // _obj_name - name объекта - как правило, textarea, но при желании можно сделать любой
    // указываем именно NAME, так как согласно стандартам DOCTYPE HTML 4.01 strict и выше
    // свойство ID у объектов ввода является не приемлемым и требуется обращаться только name
    // _tag_start - что вставлять перед выделенным текстом
    // _tag_end - что вставлять после выделенного текста
    {
        // берем объект
        var area = document.getElementsByName(_obj_name).item(0);
        // let areaChildren =area.childNodes;
        let count=0
        if (area.childNodes.length!=1){
            for (let i =0;i<=area.childNodes.length;i++){
                let a=area.childNodes;
                let b=copiedText.anchorNode.parentNode.id;
                debugger
                if (area.childNodes[i].id!=copiedText.anchorNode.parentNode.id){ 
                    ++count
                }else break
            }
        }
        console.log(count)
        debugger
        // Mozilla и другие НОРМАЛЬНЫЕ браузеры
        // ЕСЛИ есть что-либо выделенное, ТО
        if (document.getSelection) {// берем все, что до выделения
            let a=area.innerHTML.substring(0, copiedText.anchorOffset);
            let b=copiedText.toString();
            let c=area.innerHTML.substring(copiedText.focusOffset, area.innerHTML.length);
            console.log(area.innerHTML.substring(0, copiedText.anchorOffset))
            console.log(copiedText.toString())
            console.log(area.innerHTML.substring(copiedText.focusOffset, area.innerHTML.length))

            let id_1=this.state.textNodeId+1;
            let span1= '<span id="text_'+id_1+'">';
            let id_2=this.state.textNodeId+2;
            let span2= '<span id="text_'+id_2+'">';

            area.innerHTML = span1 + area.innerHTML.substring(0, copiedText.anchorOffset) +'</span>' +

                // вставляем стартовый тег
                _tag_start +

                // вставляем выделенный текст
                copiedText.text +

                // вставляем закрывающий тег
                _tag_end +

                // вставляем все, что после выделения
                span2 + area.innerHTML.substring(copiedText.focusOffset, area.innerHTML.length)+'</span>';
                debugger
                this.setState({textNodeId: this.state.textNodeId+2})
        }

        // Иначе заплатка для Internet Explorer
        else {// берем текст
            var selectedText = document.selection.createRange().text;
            // ЕСЛИ имеется какой-то выделенный текст, ТО
            if (selectedText != '') {// составляем новый текст
                var newText = _tag_start + selectedText + _tag_end;
                // вставляем новый текст
                document.selection.createRange().text = newText;
            }
        }
    }// /insert_tag
    formatText(text) {
        switch (true) {
            case this.state.bold:
                const allBold = this.contentRef.current.getElementsByTagName("strong");
                const lastBold = allBold[allBold.length - 1];
                lastBold.innerText += text;
                break;
            case this.state.italized:
                const allItalized = this.contentRef.current.getElementsByTagName("em");
                const lastItalized = allItalized[allItalized.length - 1];
                lastItalized.innerText += text;
                break;
            case this.state.underlined:
                const allUnderlined = this.contentRef.current.getElementsByTagName("u");
                const lastUnderlined = allUnderlined[allUnderlined.length - 1];
                lastUnderlined.innerText += text;
                break;
            default:
                this.contentRef.current.innerHTML += text;
                break;
        }
    }
    getSelectedText() {
        if (window.getSelection) {
            let a =window.getSelection();
            let {anchorNode, anchorOffset, focusNode, focusOffset} = document.getSelection();
            let text = window.getSelection().toString()
            // let b =window.getSelection().toString();
            // console.log(b)
            debugger
            return {anchorNode, anchorOffset, focusNode, focusOffset, text}
        } else if (document.selection) {
            return document.selection.createRange().text;
        }
        return '';
    }
    render() {
        return (
            <div className="content-outer">
                <div id="page-content" className="row">
                    <form onSubmit={this.onFormSubmit}>
                        <h1>Новая публикация</h1>
                        <input name='title'
                            type='text'
                            id='publication-title'
                            size="35"
                            onChange={this.onInputChange}
                        />
                        {this.state.file && <img src={this.state.file}></img>}
                        <input type="file" className="custom-file-input" name="myImage" onChange={this.onChange} />
                        <div className='textarea__wrapper'>
                            <div className="Controls">
                                <span onClick={this.onBoldClick} className={!this.state.bold ? 'controls__btn' : 'controls__btn Selected'}>
                                    <strong>B</strong></span>
                                <span onClick={this.onItalicsClick} className={!this.state.italized ? 'controls__btn' : 'controls__btn Selected'}><em>I</em></span>
                                <span onClick={this.onUnderlineClick} className={!this.state.underlined ? 'controls__btn' : 'controls__btn Selected'}><u>U</u></span>
                            </div>
                            <div role='textarea' style={{
                                width: '100%',
                                height: '300px',
                                backgroundColor: 'lightgrey'
                            }}
                                contenteditable='true'
                                spellcheck='true'
                                aria-multiline='true'
                                aria-label='false'
                                dir='true'
                                data-mvelo-frame='det'
                                name='content'
                                ref={this.contentRef}
                                id='textarea'
                                onChange={this.onContentChange}
                                onMouseUp={() => {
                                    let a=this.getSelectedText()
                                     this.setState({ copiedText: this.getSelectedText() }) 
                                     debugger
                                     }}>
                                <br></br>
                            </div>
                            <h3 onClick={(e) => alert(e.target.previousElementSibling.innerHTML)}>Alert</h3>
                        </div>
                        <div>
                            <h5>Выберите категории</h5>
                            {!this.state.categories
                                ? <CircularProgress />
                                : <div className={this.useStyles.root}>
                                    {/* style={{
                                margin:'15px 0 20px'
                            }} */}
                                    <Autocomplete
                                        multiple
                                        //limitTags={2}
                                        id="multiple-limit-tags"
                                        options={this.state.categories}
                                        onChange={e => {
                                            let a = e.target.nodeName
                                            if (a === 'svg') {
                                                let i = this.arr.indexOf(e.target.previousSibling.innerHTML)
                                                this.arr.splice(i, 1)
                                            } else if (this.arr.some !== e.target.innerHTML) {
                                                this.arr.push(e.target.innerHTML)
                                            }
                                            console.log(this.arr)
                                        }}
                                        getOptionLabel={(option) => option.category}
                                        //defaultValue={[this.state.top100Films[1], this.state.top100Films[2], this.state.top100Films[3]]}
                                        renderInput={(params) => (
                                            <TextField {...params} variant="outlined" />
                                        )}
                                    />
                                </div>}
                        </div>
                        <button className="upload-button" type="submit">Upload to DB</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewPublication;

// function NewPublication(props) {
//     let [coments, setComents] = useState(props.coments)
//     let [disabled, setDisabled] = useState(true)
//     let [file,setFile]=useState(null)

//     let [form, setForm] = useState({
//         title: null,
//         photo: null,
//         text: null,
//         userId: props.userId
//     });

//     let onInputChange = (event) => {
//         if (event.target.value != '') {
//             setDisabled(false)
//         } else {
//             setDisabled(true)
//         }
//         setForm({ ...form, [event.target.name]: event.target.value })
//     }
//     let onFileChange=(e) => {
//                 setFile( e.target.files[0]);
//             }

//     const sendPost = async (event) => {
//         event.preventDefault();
//         let formData = new FormData()
//         formData.append('img',file)
//         formData.append('title',form.title)
//         formData.append('text',form.text)
//         await axios.post('http://localhost:8001/posts', formData, {
//             headers: {
//               'content-type': 'multipart/form-data'
//             }
//         });
//     }

//     return (
//         <div className="content-outer">
//             <div id="page-content" className="row">
//                 <h3>Новая Публикация</h3>
//                 <form id="formElem"
//                 onSubmit={sendPost}
//                 >
//                     <div className="cf">
//                         <label for='name'>Заголовок</label>
//                         <input name='title'
//                             type='text'
//                             id='publication-title'
//                             size="35"
//                             onChange={onInputChange}
//                         />
//                     </div>
//                     {/* {form.photo && <div style={{
//                         backgroundImage: 'url('+form.photo+')',
//                         width:'200px',
//                         height: '200px'
//                     }}></div>
//                     } */}
//                     {/* <img src='../../images/portfolio/camera-man.jpg' id='img'></img> */}
//                     <div className="cf">
//                         <label for='photo'>Заглавное изображение</label>
//                         <img></img>
//                         <input name='photo'
//                             type='file'
//                             id='publication-title'
//                             size="35"
//                             onChange={onFileChange}
//                             className='submit'
//                         />
//                     </div>
//                     <div className="message cf">
//                         <label for='text'>Текст публикации</label>
//                         <textarea name='text'
//                             id='publication-message'
//                             rows="10"
//                             cols="50"
//                             onChange={onInputChange}
//                         ></textarea>
//                     </div>
//                     <button className="submit"
//                         type='submit' 
//                         //onClick={sendPost}
//                         disabled={disabled}>Опубликовать</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default NewPublication;