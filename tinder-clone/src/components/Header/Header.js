import React from 'react';

import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import logo from '../Header/images/tinder-logo.png';


function Header() {
   

    return (
        <div className="header">
            <IconButton> 
                <PersonIcon fontSize="large" className="header_icon"  />
            </IconButton> 

            <img 
                src={logo}
                className="header_logo"
                alt="tinder_icon"
            ></img>

            <IconButton> 
                <ForumIcon fontSize="large" className="header_icon"  />
            </IconButton> 
            
        </div>
    )
}

export default Header
