import React, {Component} from "react";

const visStyle = {
    display: "flex"
};
const hiddenStyle = {
    display: "none"
}
export default (props) => (
    <div className = "comment" style = {props.commentFormVisibility ? visStyle : hiddenStyle}>
        <div className ="comment__form">
            <form onSubmit = {props.onCommentSubmit}>
                <h3>Comments</h3>
                <div className = "comment__form__">
                    <input type = "text" 
                        placeholder = "About" 
                        value = {props.commentValue} 
                        onChange = {props.onCommentChange}/>
                </div>                
                <div>
                    <input type = "submit"/>
                </div>
            </form>
        </div>
    </div>
);