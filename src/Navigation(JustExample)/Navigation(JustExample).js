import React from 'react';
import './Navigation.css';

export default class Navigation extends React.Component {
    constructor() {
        super();
        this.state = { NavigationExpanded: false };
    }

    switchState() {
        this.setState({ NavigationExpanded: !this.state.NavigationExpanded});
    }

    render() {
        return (
            <div className='Navigation'>
                <NavigationButton 
                NavigationExpanded={this.state.NavigationExpanded} 
                onNavigationClick={() => this.switchState()} />
                <div className='Navigation-links'>
                    <div className='Navigation-link'>Home</div>
                    <div className='Navigation-link'>About me</div>
                    <div className='Navigation-link'>Skills</div>
                    <div className='Navigation-link'>Portfolio</div>
                </div>
            </div>
            
        );
    }
}

function NavigationButton({ NavigationExpanded, onNavigationClick }) {
    return (
        <button 
        onClick={() => onNavigationClick()}
        className='NavigationButton'>
            Navigation {NavigationExpanded ? 'Yes!' : 'No'}
        </button>
    );
}