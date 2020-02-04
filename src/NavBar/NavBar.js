import React from 'react';
import './NavBar.css';

export default function NavBar() {
    return(

        <div className='NavBar'>
            <div className='Home'>Home</div>
            <div className='AboutMe'>About me</div>
            <div className='Skills'>Skills</div>
            <div className='Portfolio'>Portfolio</div>
            <div className='Contacts'>Contacts</div>
        </div>
    );
}