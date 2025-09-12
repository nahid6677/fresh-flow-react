import React, { useState } from 'react';

const ChatProp = () => {
    const [showChat, setShowChat] = useState(false)

    const handleSubmitChat = (e) => {
        e.preventDefault();
        const form = e.target;
        const Name = form.name.value;
        const Email = form.email.value;
        const Message = form.message.value;

        // console.log({Name,Email, Message})
    }
    return (
        <>
            <div className="chat-icon"><button type="button" onClick={() => setShowChat(true)}><i className="fa fa-comment"></i></button></div>
            <div id="chat-popup" className={`chat-popup ${showChat ? 'popup-visible' : ''}`}>
                <div className="popup-inner ">
                    <div className="close-chat" onClick={() => setShowChat(false)}><i className="fa fa-times"></i></div>
                    <div className="chat-form">
                        <p>Please fill out the form below and we will get back to you as soon as possible.</p>
                        <form onSubmit={handleSubmitChat}>
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <textarea name="message" placeholder="Your Text"></textarea>
                            </div>
                            <div className="form-group message-btn">
                                <button type="submit" className="thm-btn">Send Message<span><i
                                    className="icon-diagonal-arrow"></i></span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatProp;