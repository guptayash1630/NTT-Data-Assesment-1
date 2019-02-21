import React from 'react';
import backgroundimage from '../assets/img/backicon.png';
import logo from '../assets/img/icon_hilton.png';

class HeaderComponent extends React.Component {
    render() {
        return (           
            <div className="header">
                <img className='header-button' alt='background' src={backgroundimage} />
                <h1>Hotel Details</h1>
                <img class="hilton-icon" alt='icon' src={logo} />
            </div>
        );
    }
};

export default HeaderComponent;

