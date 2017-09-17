import React, {Component} from "react";
import Dayblock from "./dayblock.jsx";
import Nav from "./nav.jsx";
import runData from "./data.json";


class App extends Component{    

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
                                         
                    <footer>
                        <div>Blurb for email signup.</div>
                        <div>Blurb for who did this.</div>
                        <div>
                            <input type = "checkbox" checked/>
                        </div>
                        <div>                            
                            {runData.days.map((item) => {
                                return (
                                    <span>{item.day}</span>
                                );
                            })}
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default App;