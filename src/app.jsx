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

    handleEmailChange =(e) => {
        const latestEmailValue = e.target.value;                
        this.setState((prevState) => {                 
            return {
                ...prevState,
                emailText: latestEmailValue
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
        const latestCommentTitle = e.target.value;     
        this.setState(prevState => {
            return {                
                ...prevState,
                commentTitle: latestCommentTitle
            };
        });
    }  
    handleCommentTextChange = e => {        
        const latestCommentText = e.target.value;
        this.setState(prevState => {
            return {
                ...prevState,
                commentText: latestCommentText
            };
        });
    }

    handleCommentSubmit = (e) => {
        e.preventDefault();
        this.setState((prevState, props) => {
            //DO A POST
            return {
                ...prevState,
                commentTitle: "",
                commentText: ""
            };
        });
    }

    handleCommentFormClose = e => {
        this.setState((prevState, props) => {
            return {
                ...prevState,
                commentFormVisibility: false
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