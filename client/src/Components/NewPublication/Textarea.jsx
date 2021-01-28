import axios from 'axios';
import { useState } from 'react';
import React from 'react';
import { Button, CircularProgress, Menu, MenuItem } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './NewPublication.css'

function Textarea(props) {

    return (
        <div className='textarea__wrapper'>
            <span className="Controls">
                <span className='controls__btn'><strong>B</strong></span>
                <span className='controls__btn'><em>I</em></span>
                <span className='controls__btn'><u>U</u></span>
            </span>
            <textarea name='text'
                id='publication-message'
                rows="10"
                cols="50"
                onChange={this.onInputChange}
            ></textarea>
        </div>
    )
}

export default Textarea;