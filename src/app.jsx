import React, {Component} from "react";
import Dayblock from "./dayblock.jsx";
import Nav from "./nav.jsx";
import MainSplash from "./mainsplash.jsx";
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
                    <MainSplash/>
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