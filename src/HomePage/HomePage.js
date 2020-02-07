import React from 'react';
import './HomePage.css';

export default function HomePage() {
    return(
        <div className='HomePage'>
        <div className='Description'>
          <div className='Name'>Florin Dumitru</div>
          <div className='Role'>
            JavaScript | React developer
            based in London
          </div>
          <div className='ToogleContainer'>
            <div className='ToggleText'>
            Light on | Light off
            </div>
          </div>
        </div>
      </div>
    );
}
