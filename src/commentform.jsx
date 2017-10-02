import React, {Component} from "react";

const visStyle = {
    display: "flex"
};
const hiddenStyle = {
    display: "none"
}
export default (props) => (
    <div className = "comment" 
        style = {/*props.commentFormVisibility ?*/ visStyle} 
        onClick = {props.onCommentFormVisibility}>
        <div className ="comment__form">
            <form onSubmit = {props.onCommentSubmit}>
                <h3>Comments</h3>
                <div className = "comment__form__field">
                    <input type = "text"                        
                        className = "comment__form__field__input"
                        placeholder = "About" 
                        value = {props.commentTitle} 
                        onChange = {e => {console.log(e.target); props.onCommentTitleChange(e.target.value)}}/>
                </div>                
                <div className = "comment__form__field">
                    <input type = "text"                         
                        className = "comment__form__field__input"
                        placeholder = "Content" 
                        value = {props.commentText}
                        onChange = {e => {props.onCommentTextChange(e.target.value)}}/>
                 </div>      
                <div className = "comment__form__field">
                    <input type = "submit"
                        className = "comment__form__field__submit"/>
                </div>
            </form>
        </div>
    </div>
);