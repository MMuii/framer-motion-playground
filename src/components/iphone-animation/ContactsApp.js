import React from 'react';

const Contact = ({ name, description, color }) => (
    <div className="contact__wrapper">
        <div className="contact__avatar" style={{ background: color }}>
            <i className="fas fa-user" />
        </div>
        <div className="contact__info-wrapper">
            <div className="contact__name">{name}</div>
            <div className="contact__description">{description}</div>
        </div>
    </div>
)

const ContactsApp = () => {
    const renderLetters = () => {
        const alphabet = [];

        for (let i = 0; i < 26; i++) {
            alphabet.push(<span key={i}>{String.fromCharCode(97 + i)}</span>);
        }

        return alphabet;
    }

    return (
        <div className="iphone-contacts-app">
            <div className="header__wrapper">
                <h1>Contacts</h1>
                <i className="fas fa-search" />
                <i className="fas fa-plus" />
            </div>
            <div className="contacts__wrapper--outer">
                <div className="contacts__wrapper--inner">
                    <div className="contacts__letter">A</div>
                    <Contact name="Aaron Smith" description="Sample Company Inc." color="#fdb813"/>
                    <div className="contacts__letter">B</div>
                    <Contact name="Brook Adams" description="Schoolmate" color="#72c9cb" />
                    <Contact name="Barbara Claude" description="Yet Another Company Inc." color="#a2be59" />
                    <div className="contacts__letter">G</div>
                    <Contact name="George Baker" description="University of smth" color="#fa7a92" />
                    <div className="contacts__letter">M</div>
                    <Contact name="Margaret Bell" description="Dentist" color="#e3182e" />
                </div>

                <div className="alphabet">
                    {renderLetters()}
                </div>
            </div>
        </div>
    )
}

export default ContactsApp;