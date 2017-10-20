import React, {Component} from "react";

const visStyle = {
    display: "flex"
};
const hiddenStyle = {
    display: "none"
}
export default ({
    commentFormVisibility, 
    onCommentFormVisibility, 
    onCommentSubmit, 
    commentTitle, 
    commentText, 
    onCommentTitleChange,
    onCommentTextChange
}) => (
    <div className = "comment" 
        style = {commentFormVisibility ? visStyle: hiddenStyle}>
        <div className ="comment__form">
            <div className = "comment__form__exit">
                <div className ="comment__form__exit__button" onClick = {onCommentFormVisibility.bind(this)}></div>
            </div>
            <form onSubmit = {onCommentSubmit}>
                <h3>What ails you?</h3>
                <div className = "comment__form__field">
                    <input type = "text"                        
                        className = "comment__form__field__input"
                        placeholder = "About" 
                        value = {commentTitle} 
                        onChange = {onCommentTitleChange.bind(this)}/>
                </div>                
                <div className = "comment__form__field">
                    <input type = "text"                         
                        className = "comment__form__field__input"
                        placeholder = "Description" 
                        value = {commentText}
                        onChange = {onCommentTextChange.bind(this)}/>
                 </div>      
                <div className = "comment__form__field">
                    <input type = "submit" className = "comment__form__field__submit"/>
                </div>
            </form>
        </div>
    </div>
);