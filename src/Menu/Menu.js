import React from 'react';

export default class Menu extends React.Component {
    constructor() {
        super();
        this.state = { isExpanded: false };
    }

    render() {
        return (
            <div className='Menu'>
                <div className='Menu-links'>
                    <div className='Menu-link'>Home</div>
                    <div className='Menu-link'>About me</div>
                    <div className='Menu-link'>Skills</div>
                    <div className='Menu-link'>Portfolio</div>
                </div>
            </div>
        );
    }
}