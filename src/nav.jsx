import React, {component} from "react";

export default (props) => (
    <div className = "root__left">                    
        <div className = "root__left__logo"></div>
        <div className = "root__left__nav">
            {
                props.days.map((el) => {
                    let anchor = `#${el.day}`;
                    return (
                        <div className = "root__left__nav__item">
                            <a href = {anchor}>{el.day}</a>
                        </div>
                    );
                })
            }                        
        </div>
        <div className = "root__left__footer">
            <div className = "root__left__footer__title">Social</div>                        
            <div className = "root__left__footer__icons">
                <div className = "root__left__footer__icons__item root__left__footer__icons__item--fb"></div>
                <div className = "root__left__footer__icons__item root__left__footer__icons__item--twit"></div>
                <div className = "root__left__footer__icons__item root__left__footer__icons__item--insta"></div>                            
            </div>
        </div>
    </div>    
);