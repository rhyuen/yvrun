import React, {Component} from "react";

export default (props) => (
    <footer>
        <div className = "footer__header">YVRUN</div>
        <div className = "footer__form">
            <input className = "footer__form__text" type = "text" placeholder = "email@email.com"/>
            <input className = "footer__form__submit" type = "submit" value = "Subscribe"/>
        </div>                                                
    </footer>
);
