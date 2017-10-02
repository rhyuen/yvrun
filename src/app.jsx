import React, {Component} from "react";
import Dayblock from "./dayblock.jsx";
import Nav from "./nav.jsx";
import MainSplash from "./mainsplash.jsx";
import Footer from "./footer.jsx";
import runData from "./data.json";
import CommentForm from "./commentform.jsx";


class App extends Component{        
    state = {
        collapsed: [],
        emailText: "",
        commentTitle: "",
        commentText: "",
        commentFormVisibility: false
    }    

    handleEmailChange =(email) => {                
        this.setState((prevState) => {                 
            return {
                ...prevState,
                emailText: email
            };
        });
    }

    handleEmailSubmit = (e) => {
        e.preventDefault();

        //MAKE A POST TO A SERVER HERE.

        this.setState((prevState, props) => {
            return {   
                ...prevState,
                emailText: ""
            };
        });
    }

    handleCommentFormVisibility = (e) => {
        e.preventDefault();
        //Do a Check for if you're inside the Dialog, then do not close.

        this.setState((prevState, props) => {
            return {
                ...prevState,
                commentFormVisibility: !prevState.commentFormVisibility
            };
        });
    }

    handleCommentTitleChange = (e) => {
        console.log(e);        
        this.setState(prevState => {
            return {                
                ...prevState,
                commentTitle: e                
            }
        });
    }  
    handleCommentTextChange = e => {
        this.setState(prevState => {
            return {
                ...prevState,
                commentText: e
            };
        });
    }

    handleCommentSubmit = (e) => {
        e.preventDefault();
        this.setState((prevState, props) => {
            return {
                ...prevState
            };
        });
    }



    render(){        
        return (
            <div className = "root">
                <CommentForm commentFormVisibility = {this.state.commentFormVisibility}
                    onCommentFormVisibility = {this.handleCommentFormVisibility}
                    commentTitle = {this.state.commentTitle}
                    commentText = {this.state.commentText}
                    onCommentTitleChange = {this.handleCommentTitleChange}
                    onCommentTextChange = {this.handleCommentTextChange}
                    onCommentSubmit = {this.handleCommentSubmit}/>
                <Nav days = {runData.days}/>               
                <div className = "root__main">
                    <MainSplash onCommentFormVisibility = {this.handleCommentFormVisibility}/>
                    {
                        runData.days.map((item, index) => {
                            return (
                                <Dayblock key = {index} 
                                    day = {item.day} 
                                    events = {item.events}/>
                            );
                        })
                    }                                         
                  <Footer emailValue = {this.state.emailText}
                    onEmailTextChange = {this.handleEmailChange}
                    onEmailFormSubmit = {this.handleEmailSubmit}/>
                </div>
            </div>
        );
    }
}

export default App;