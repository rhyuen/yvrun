import React, {Component} from "react";
import Dayblock from "./dayblock.jsx";
import Nav from "./nav.jsx";
import MainSplash from "./mainsplash.jsx";
import Footer from "./footer.jsx";
import CommentForm from "./commentform.jsx";


class App extends Component{        
    state = {        
        runEvents: this.props.runData,
        emailText: "",
        commentTitle: "",
        commentText: "",
        commentFormVisibility: false
    }    

    handleEmailChange = e => {
        const latestEmailValue = e.target.value;                
        this.setState((prevState) => {                 
            return {
                ...prevState,
                emailText: latestEmailValue
            };
        });
    }

    handleEmailSubmit = e => {
        e.preventDefault();

        //TODO: MAKE A POST TO A SERVER HERE.

        this.setState((prevState, props) => {
            return {   
                ...prevState,
                emailText: ""
            };
        });
    }

    handleCommentFormVisibility = e => {
        e.preventDefault();
        //Do a Check for if you're inside the Dialog, then do not close.

        this.setState((prevState, props) => {
            return {
                ...prevState,
                commentFormVisibility: !prevState.commentFormVisibility
            };
        });
    }

    handleCommentTitleChange = e => {        
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

    handleCommentSubmit = e => {
        e.preventDefault();
        this.setState((prevState, props) => {
            //DO A POST
            return {
                ...prevState,
                commentFormVisibility: false,
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

    handleEventDetailCollapse = (id, e) => {        
        let dayIndex = null;
        let eventIndex = null;

        //find indices to change
        //dayIndex 0 - 6
        //eventIndex 0 to length -1 
        let theDate = this.state.runEvents.forEach((day, day_index) => {
            day.events.forEach((evt, evt_index) => {
                if(evt.id === id){                    
                    dayIndex = day_index;
                    eventIndex = evt_index;
                }
            });
        });
        
        
        this.setState(prevState => {

            //The elements that don't change that are before the POI.
            let firstPart = prevState.runEvents.slice(0, dayIndex);  //Begin WEek
            let lastPart = prevState.runEvents.splice(dayIndex + 1); //End Week

            //The Event Element with the value you're changing.
            let updatedElement = Object.assign({}, 
                prevState.runEvents[dayIndex].events[eventIndex], {
                    collapsed: !prevState.runEvents[dayIndex].events[eventIndex].collapsed
                });
            //Day to Change
            //Old day to merge with the new one.
                        
             const updatedDay = Object.assign({}, {
                    day: prevState.runEvents[dayIndex].day
                }, {
                    events: [
                        ...prevState.runEvents[dayIndex].events.slice(0, eventIndex),
                        updatedElement,
                        ...prevState.runEvents[dayIndex].events.splice(eventIndex + 1)
                    ]
                }
            );
                                                
            const finalUpdatedWeek = firstPart.concat(updatedDay).concat(lastPart);            
            return {
                ...prevState,
                runEvents: finalUpdatedWeek
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
                <Nav days = {this.state.runEvents}/>               
                <div className = "root__main">
                    <MainSplash onCommentFormVisibility = {this.handleCommentFormVisibility}/>
                    {
                        this.state.runEvents.map((item, index) => {
                            return (
                                <Dayblock key = {index} 
                                    day = {item.day} 
                                    events = {item.events}
                                    onEventDetailChange = {this.handleEventDetailCollapse}/>
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