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
            text: null,
            categories: this.props.categories,
            chose: [],
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    componentDidUpdate(prevProps){
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
        formData.append('text', this.state.text);
        formData.append('categories',this.arr)
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
        debugger
        this.setState({ file: e.target.files[0] });
        console.log(e.target.files[0])
    }
    onInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    useStyles = makeStyles((theme) => ({
        root: {
            width: 500,
            '& > * + *': {
                marginTop: theme.spacing(3),
            },
        },
    }));
    arr=[]
    getBase64Image=(img) => {  
        var canvas = document.createElement("canvas");  
        canvas.width = img.width;  
        canvas.height = img.height;
    
        var ctx = canvas.getContext("2d");  
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");  
      
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");  
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
                        <textarea name='text'
                            id='publication-message'
                            rows="10"
                            cols="50"
                            onChange={this.onInputChange}
                        ></textarea>
                        <div>
                            <h5>Выберите категории</h5>
                            {!this.state.categories
                            ? <CircularProgress/>
                            :<div className={this.useStyles.root}> 
                            {/* style={{
                                margin:'15px 0 20px'
                            }} */}
                                <Autocomplete
                                    multiple
                                    //limitTags={2}
                                    id="multiple-limit-tags"
                                    options={this.state.categories}
                                    onChange={e=>{
                                        let a=e.target.nodeName
                                        if (a==='svg') {
                                            let i=this.arr.indexOf(e.target.previousSibling.innerHTML)
                                            this.arr.splice(i,1)
                                        }else if (this.arr.some!==e.target.innerHTML){
                                            this.arr.push(e.target.innerHTML)  
                                        }
                                        console.log(this.arr)
                                    }}
                                    getOptionLabel={(option) => option.category}
                                    //defaultValue={[this.state.top100Films[1], this.state.top100Films[2], this.state.top100Films[3]]}
                                    renderInput={(params) => (
                                        <TextField {...params} variant="outlined"/>
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