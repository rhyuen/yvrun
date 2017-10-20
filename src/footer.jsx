import React, {Component} from "react";

export default ({onEmailFormSubmit, emailValue, onEmailTextChange}) => (
    <footer>
        <div className = "footer__header">YVRUN</div>
        <div className = "footer__form">
            <form onSubmit = {onEmailFormSubmit.bind(this)}>
                <input className = "footer__form__text" 
                    type = "text"
                    value = {emailValue}
                    onChange = {onEmailTextChange.bind(this)}
                    placeholder = "your.address@email.com"/>
                <input className = "footer__form__submit" 
                    type = "submit" 
                    value = "Subscribe"/>
            </form>
        </div>                                                
    </footer>
);
    