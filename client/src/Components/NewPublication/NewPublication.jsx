import axios from 'axios';
import { useState } from 'react';
import React from 'react';
import { Button, CircularProgress, FormControl, InputBase, InputLabel, Menu, MenuItem, NativeSelect } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { createMuiTheme, makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './NewPublication.css'
import { BootstrapInput, useStyles } from '../../Hook/styleHook.js'

class NewPublication extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: {},
            fileNumber: 1,
            title: null,
            content: null,
            contentText: '',
            categories: this.props.categories,
            chose: [],
            bold: false,
            italized: false,
            underlined: false,
            textNodeId: 0,
            fonts: [8, 10, 11, 12, 14, 15, 16, 18, 24, 36, 48],
            isClosed: true,
            image: '',
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);

        // Форматирование

        this.contentRef = React.createRef();

        this.onFontClick = this.onFontClick.bind(this);
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
        formData.append('content', this.contentRef.current.innerHTML);
        formData.append('categories', this.arr)
        debugger
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
        this.setState({ [e.target.name]: e.target.files[0] });
        const formData = new FormData();
        formData.append('myfile', e.target.files[0]);
        formData.append('token', this.props.token);
        debugger
        console.log(formData)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("http://localhost:8001/images", formData, config)
            .then((res) => {
                this.setState({ image: res.data.img })
                alert("The file is successfully uploaded");
            }).catch((error) => { });
    }
    onInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onContentChange(e) {
        debugger
        this.setState({ contentText: e.target.innerText });
        this.setState({ [e.target.name]: e.target.innerHTML });
    }
    arr = []
    // Форматирование
    onFontClick(event) {
        // debugger
        // let fontedId=this.props.fontedId+1;
        // this.props.setFontedId(fontedId)
        this.props.setFontSize(event.target.innerHTML)
        if (this.props.copiedText !== '') {
            this.props.ChangeFontSizeThunk('content',
                event.target.innerHTML,
                this.props.copiedText,
            )
        }
        this.props.setCopiedText('')
    }
    onBoldClick(event) {
        //this.props.setUnderlinedId(++this.props.underlinedId )

        let openTag = '<em>'
        if (this.props.copiedText !== '') {
            this.props.DecorateTextThunk('content', openTag, '</em>', this.props.copiedText)
        }
        debugger
        this.setState({
            bold: !this.state.bold
        });
        this.props.setCopiedText('')
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
    getSelectedText() {
        if (window.getSelection) {
            let { anchorNode, anchorOffset, focusNode, focusOffset } = document.getSelection();
            let text = window.getSelection().toString()
            return { anchorNode, anchorOffset, focusNode, focusOffset, text }
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
                        <div className='add_title_img'>
                            <h5>Добавить заглавное изображение</h5>
                            
                                <input type="file" id="file" className="inputfile" name="file" onChange={this.onChange} />
                                <label for="file">Выберите изображение</label>
                            
                            {this.state.image &&
                                <div style={{
                                    backgroundImage: 'url(' + this.state.image + ')',
                                    maxWidth: '700px'
                                }}
                                    className='post-img'></div>
                                // <img src={this.state.image}></img>
                            }
                        </div>
                        <div className='textarea__wrapper'>
                            <div className="Controls">
                                <span onClick={this.onBoldClick} className={!this.state.bold ? 'controls__btn' : 'controls__btn Selected'}>
                                    <strong>B</strong></span>
                                <span onClick={this.onItalicsClick} className={!this.state.italized ? 'controls__btn' : 'controls__btn Selected'}><em>I</em></span>
                                <span onClick={this.onUnderlineClick} className={!this.state.underlined ? 'controls__btn' : 'controls__btn Selected'}><u>U</u></span>
                                <span className="search">
                                    <select className="collection">
                                        {
                                            this.state.fonts.map(item => <option onClick={this.onFontClick}>{item}</option>)
                                        }
                                    </select>
                                    <input type="file" id="images" className="add-content-img" name="images" />
                                    <label for="images">Добавить изображение</label>
                                </span>
                            </div>
                            <div role='textarea' style={{
                                width: '100%',
                                height: '300px',
                                backgroundColor: 'lightgrey',
                                fontSize: '14px',
                            }}
                                contenteditable='true'
                                spellcheck='true'
                                aria-multiline='true'
                                aria-label='false'
                                dir='true'
                                data-mvelo-frame='det'
                                className='post__content'
                                name='content'
                                id='textarea'
                                ref={this.contentRef}
                                onChange={this.onContentChange}
                                onMouseUp={() => {
                                    let a = this.getSelectedText()
                                    this.props.setCopiedText(this.getSelectedText())
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
                                : <div className={useStyles.root}>
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
            </div >
        )
    }
}

export default NewPublication;