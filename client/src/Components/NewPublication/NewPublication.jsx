import axios from 'axios';
import React from 'react';
import { CircularProgress } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import './NewPublication.css'
import { useStyles } from '../../Hook/styleHook.js'
import { imagesAPI, publicationAPI } from '../../DAL/api';
import { withRouter } from 'react-router-dom';

class NewPublication extends React.Component {

    constructor(props) {
        debugger
        super(props);
        this.state = {
            isUploaded: false,
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
            imageTitle: '',
            subtitle: '',
            date: Date.now()
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.AddImage = this.AddImage.bind(this);

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
    componentWillUnmount() {
        if (!this.state.isUploaded) imagesAPI.deleteAllImages(this.state.date)
    }
    onFormSubmit = async (e) => {
        e.preventDefault();
        let res = await publicationAPI.sendPost(
            this.state.file,
            this.state.title,
            this.contentRef.current.innerHTML,
            this.arr,
            this.props.userId,
            this.state.subtitle,
            this.state.contentText
            )
        this.setState({ isUploaded: true })
        this.props.history.goBack()
    }

    onChange = async (e) => {
        this.setState({ [e.target.name]: e.target.files[0] });
        const reader = new FileReader();
        reader.onload = (e) => {
            console.log(e)
            this.setState({ imageTitle: e.target.result })
        }
        reader.readAsDataURL(e.target.files[0])

        let res = await publicationAPI.setImg(e.target.files[0], this.state.date)
        this.setState({ image: res.img })
    }
    AddImage = async (e) => {
        let res = await publicationAPI.setImg(e.target.files[0], this.state.date)
        this.setState({ image: res.img })
        this.props.AddImageThunk('content', res.img.filename, this.props.copiedText)
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
        this.props.setFontSize(event.target.value)
        if (this.props.copiedText !== '') {
            this.props.ChangeFontSizeThunk('content',
                event.target.value,
                this.props.copiedText,
            )
        }
        this.props.setCopiedText('')
    }
    onBoldClick(event) {
        if (this.props.copiedText !== '') {
            this.props.DecorateTextThunk('content', 'SPAN', this.props.copiedText)
        }
        this.setState({
            bold: !this.state.bold
        });
        this.props.setCopiedText('')
    }
    onItalicsClick(event) {
        if (this.props.copiedText !== '') {
            this.props.DecorateTextThunk('content', 'EM', this.props.copiedText)
        }
        this.setState({
            italized: !this.state.italized
        });
    }
    onUnderlineClick(event) {
        if (this.props.copiedText !== '') {
            this.props.DecorateTextThunk('content', 'U', this.props.copiedText)
        }
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
                        <h5>Заголовок</h5>
                        <input name='title'
                            type='text'
                            id='publication-title'
                            // size="35"
                            style={{ width: '100%' }}
                            onChange={this.onInputChange}
                        />
                        <div className='add_title_img'>
                            <h5>Добавить заглавное изображение</h5>

                            <input type="file" id="file" className="inputfile" name="file" onChange={this.onChange} />
                            <label for="file">Выберите изображение</label>

                            {this.state.image &&
                                <div style={{
                                    backgroundImage: 'url(' + this.state.imageTitle + ')',
                                    maxWidth: '700px'
                                }}
                                    className='post-img'></div>
                                // <img src={this.state.image}></img>
                            }
                        </div>

                        <h5>Подзаголовок</h5>
                        <textarea type="text"
                            id="subtitle"
                            className=""
                            name="subtitle"
                            onChange={this.onInputChange}
                            style={{
                                height: "84px",
                                width: "100%",
                            }} />
                        {/* <label for="subtitle">Краткое описание</label> */}

                        <div className='textarea__wrapper'>
                            <div className="Controls">
                                <span onClick={this.onBoldClick} className={!this.state.bold ? 'controls__btn' : 'controls__btn Selected'}>
                                    <strong>B</strong></span>
                                <span onClick={this.onItalicsClick} className={!this.state.italized ? 'controls__btn' : 'controls__btn Selected'}><em>I</em></span>
                                <span onClick={this.onUnderlineClick} className={!this.state.underlined ? 'controls__btn' : 'controls__btn Selected'}><u>U</u></span>
                                <span className="search">
                                    <select onChange={this.onFontClick}>
                                        {
                                            this.state.fonts.map(item => <option onClick={this.onFontClick}>{item}</option>)
                                        }
                                    </select>

                                </span>
                                <input type="file" id="images" onChange={this.AddImage}
                                    className="add-content-img"
                                    name="images" />
                                <label for="images">Добавить изображение</label>
                            </div>

                            <div role='textarea' style={{
                                width: '100%',
                                height: '700px',
                                backgroundColor: 'lightgrey',
                                fontSize: '14px',
                                padding: "10px",
                                overflow: "overlay"
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
                                {/* <span>&#8203;</span>
                                <br></br> */}
                            </div>
                            {/* <h3 onClick={(e) => alert(e.target.previousElementSibling.innerHTML)}>Alert</h3> */}
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
                        <button className="upload-button" type="submit">Отправить</button>
                    </form>
                </div>
            </div >
        )
    }
}

export default withRouter(NewPublication);