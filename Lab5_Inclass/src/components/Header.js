import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './Header.css'
import { Link, useHistory } from 'react-router-dom';

function Header({ backButton }) {

    const history = useHistory();

    return (
        <div className='header'>
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize='large' className='headerIcons' />
                </IconButton>

            ) : (
                <IconButton>
                    <PersonIcon className='headerIcons' fontSize='large' />
                </IconButton>
            )}
            <Link to='/'>
                <img className='header__image' src='favicon.ico' alt='tinder/logo' />
            </Link>
            <Link to='/chat'>
                <IconButton>
                    <ForumIcon className='headerIcons' fontSize='large' />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header