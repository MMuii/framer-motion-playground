import React from 'react';

const ContactsApp = () => {

    return (
        <div className="iphone-music-app">
            <h1>Africa</h1>
            <h2>Toto</h2>
            <div className="progress-bar__bar" />
            <div className="progress-bar__time-wrapper">
                <div className="progress-bar__time-elapsed">1:36</div>
                <div className="progress-bar__time-left">-2:48</div>
            </div>
            <div className="music-controls">
                <i className="fas fa-step-backward fa-4x"/>
                <i className="fas fa-pause-circle fa-7x"/>
                <i className="fas fa-step-forward fa-4x"/>
            </div>
            <div className="player-controls">
                <i className="fas fa-heart fa-4x"/>
                <i className="fas fa-random fa-4x"/>
            </div>
        </div>
    )
}

export default ContactsApp;