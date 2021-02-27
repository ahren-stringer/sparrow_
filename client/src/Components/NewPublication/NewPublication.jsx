import React from 'react';
import { CircularProgress } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import './NewPublication.css'
import { useStyles } from '../../Hook/styleHook.js'
import { imagesAPI } from '../../DAL/api';
import { withRouter } from 'react-router-dom';

class NewPublication extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: Date.now()
        };
    }
    componentWillUnmount() {
        if (!this.props.isUploaded) imagesAPI.deleteAllImages(this.state.date)
    }
    onFormSubmit = async (e) => {
        e.preventDefault();
        await this.props.PublicationThunk(
            this.props.file,
            this.props.title,
            this.props.innerHTML,
            this.props.setedCategories,
            this.props.userId,
            this.props.subtitle,
        )
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
                            style={{ width: '100%' }}
                            value={this.props.title}
                            onChange={(e) => { this.props.onTextChange(e.target.name, e.target.value) }}
                        />
                        <div className='add_title_img'>
                            <h5>Добавить заглавное изображение</h5>

                            <input type="file" id="file" className="inputfile" name="file"
                                onChange={(e) => { this.props.MainImgThunk(e.target.files[0]) }}
                            />
                            <label for="file">Выберите изображение</label>

                            {this.state.image &&
                                <div style={{
                                    backgroundImage: 'url(' + this.props.imageTitle + ')',
                                    maxWidth: '700px'
                                }}
                                    className='post-img'></div>
                            }
                        </div>

                        <h5>Подзаголовок</h5>
                        <textarea type="text"
                            id="subtitle"
                            className=""
                            name="subtitle"
                            value={this.props.subtitle}
                            onChange={(e) => { this.props.onTextChange(e.target.name, e.target.value) }}
                            style={{
                                height: "84px",
                                width: "100%",
                            }} />
                        {/* <label for="subtitle">Краткое описание</label> */}

                        <div className='textarea__wrapper'>
                            <div className="Controls">
                                <span onClick={()=>{this.props.bold(this.props.copiedText)}} className='controls__btn'>
                                    <strong>B</strong></span>
                                <span className="search">
                                    <select onChange={(e)=>{this.props.changeFontSize(e.target.value,this.props.copiedText)}}>
                                        {
                                            this.props.fonts.map(item => <option onClick={this.onFontClick}>{item}</option>)
                                        }
                                    </select>

                                </span>
                                <input type="file" id="images"
                                    onChange={(e) => { this.props.AddImageThunk(e.target.files[0], this.state.date, this.props.copiedText)}}
                                    className="add-content-img"
                                    name="images" />
                                <label for="images">Добавить изображение</label>
                            </div>

                            <div role='textarea'
                                contenteditable='true'
                                spellcheck='true'
                                aria-multiline='true'
                                aria-label='false'
                                dir='true'
                                data-mvelo-frame='det'
                                className='post__content'
                                name='content'
                                ref={this.contentRef}
                                onInput={(e) => { this.props.onTextChange(e.target.name, e.target.value) }}
                                onMouseUp={() => {
                                    let a = this.getSelectedText()
                                    this.props.setCopiedText(this.getSelectedText())
                                }}
                            >
                                {this.props.content}
                            </div>
                            {/* <h3 onClick={(e) => alert(e.target.previousElementSibling.innerHTML)}>Alert</h3> */}
                        </div>
                        <div>
                            <h5>Выберите категории</h5>
                            {!this.props.categories
                                ? <CircularProgress />
                                : <div className={useStyles.root}>
                                    <Autocomplete
                                        multiple
                                        id="multiple-limit-tags"
                                        options={this.props.categories}
                                        onChange={e => { this.props.setCategory(this.props.setedCategories, e.target) }}
                                        getOptionLabel={(option) => option.category}
                                        renderInput={(params) => (
                                            <TextField {...params} variant="outlined" />
                                        )}
                                    />
                                </div>
                            }
                        </div>
                        <button className="upload-button" type="submit">Отправить</button>
                    </form>
                </div>
            </div >
        )
    }
}

export default withRouter(NewPublication);