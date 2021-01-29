import React from 'react';

const Chat = ({ name, msg, color, time }) => (
    <div className="chat__wrapper">
        <div className="chat__avatar" style={{ background: color }}>
            <i className="fas fa-user" />
        </div>
        <div className="chat__info-wrapper">
            <div className="chat__name">{name}</div>
            <div className="chat__msg">{msg}</div>
            {time ? <div className="chat__time">{time}</div> : <div className="chat__active" />}
        </div>
    </div>
)

const ChatsApp = () => {
    return (
        <div className="iphone-chats-app">
            <div className="header__wrapper">
                <h1>Chats</h1>
                <i className="fas fa-search" />
            </div>
            <div className="chats__wrapper--outer">
                <div className="chats__wrapper--inner">
                    <Chat name="Adam Smith" msg="Lorem ipsum dolort, con secteuter..." color="#fdb813" />
                    <Chat name="Adam Smith" msg="Lorem ipsum dolort, con secteuter..." color="#fa7a92" time="1 min ago" />
                    <Chat name="Adam Smith" msg="Lorem ipsum dolort, con secteuter..." color="#e3182e" time="3 min ago" />
                    <Chat name="Adam Smith" msg="Lorem ipsum dolort, con secteuter..." color="#a2be59" time="6 min ago" />
                    <Chat name="Adam Smith" msg="Lorem ipsum dolort, con secteuter..." color="#72c9cb" time="14 min ago" />
                </div>
            </div>
        </div>
    )
}

export default ChatsApp;