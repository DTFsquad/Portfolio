import React from 'react';
import './Menu.css';

export default class Menu extends React.Component {
    constructor() {
        super();
        this.state = { isExpanded: false };
    }

    switchState() {
        this.setState({ NavigationExpanded: !this.state.NavigationExpanded});
    }

    render() {
        return (
            <div className='Menu'>
                <MenuButton 
                NavigationExpanded={this.state.NavigationExpanded} 
                onNavigationClick={() => this.switchState()} />
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

function MenuButton({ NavigationExpanded, onNavigationClick }) {
    return (
        <button 
        onClick={() => onNavigationClick()}
        className='MenuButton'>
            Navigation {NavigationExpanded ? 'Yes!' : 'No'}
        </button>
    );
}