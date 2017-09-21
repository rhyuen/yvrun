import React, {Component} from "react";
import Dayblock from "./dayblock.jsx";
import Nav from "./nav.jsx";
import Footer from "./footer.jsx";
import runData from "./data.json";


class App extends Component{    
    constructor(props){
        super(props);
        this.state = {
            collapsed: [],
            emailForm: ""
        };
    }

    handleFormValue(evt){
        this.setState((prevState) => {
            return {
                collapsed: prevState.collapsed,
                emailForm: evt.target.value
            }
        });
    }

    render(){        
        return (
            <div className = "root">
                <Nav days = {runData.days}/>               
                <div className = "root__main">
                    <div className = "root__main__title">YVRUN, Running with Strangers</div>
                    <div className = "root__main__content">Here's a list of days, times and places where strangers run together.  It's all over town.  At all times of day.  Some are even at some ungodly hour of the morning.</div>
                    <div className = "root__main__content">Send more groups of strangers at <a href = "/">yvrun@gmail.com</a></div>                    

                    {
                        runData.days.map((item) => {
                            return (
                                <Dayblock day = {item.day} events = {item.events}/>
                            );
                        })
                    }                                         
                  <Footer formValue = {this.state.emailForm}/>
                </div>
            </div>
        );
    }
}

export default App;