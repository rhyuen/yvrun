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
        commentText: "",
        commentFormVisibility: false
    }    

    handleEmailChange =(email) => {                
        this.setState((prevState) => {                 
            return {
                collapsed: prevState.collapsed,
                emailText: email,
                commentText: prevState.commentForm
            };
        });
    }

    handleEmailSubmit = (e) => {
        e.preventDefault();

        //MAKE A POST TO A SERVER HERE.

        this.setState((prevState, props) => {
            return{   
                collapsed: prevState.collapsed,
                emailText: "",
                commentText: prevState.commentForm
            }
        });
    }

    handleCommentFormVisibility = (e) => {
        e.preventDefault();
        this.setState((prevState, props) => {
            return {
                collapsed: prevState.collapsed,
                emailText: prevState.emailText,
                commentFormVisibility: !prevState.commentFormVisibility
            };
        });
    }

    handleCommentChange = (e) => {
        this.setState(prevState => {
            return {
                collapsed: prevState.collapsed,
                emailText: prevState.emailForm,
                commentText: e.target.value
            }
        });
    }    

    handleCommentSubmit = (e) => {
        e.preventDefault();
        this.setState((prevState, props) => {
            return (
                null
            );
        });
    }



    render(){        
        return (
            <div className = "root">
                <CommentForm commentFormVisibility = {this.state.commentFormVisibility}
                    onCommentFormVisibility = {this.handleCommentFormVisibility}
                    commentValue = {this.state.commentText}
                    onCommentChange = {this.handleCommentChange}
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