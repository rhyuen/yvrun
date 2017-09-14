import React, {Component} from "react";
import Dayblock from "./dayblock.jsx";
import runData from "./data.json";


class App extends Component{
    render(){        

        return (
            <div className = "root">
                <div className = "root__left">                    
                    <div className = "root__left__logo"></div>
                    <div className = "root__left__nav">
                        {
                            runData.days.map((el) => {
                                return (
                                    <div className = "root__left__nav__item">{el.day}</div>
                                );
                            })
                        }                        
                    </div>
                    <div className = "root__left__footer">
                        <div className = "root__left__footer__title">Share on</div>                        
                        <div className = "root__left__footer__icons">
                            <div className = "root__left__footer__icons__item"></div>
                            <div className = "root__left__footer__icons__item"></div>
                            <div className = "root__left__footer__icons__item"></div>                            
                        </div>
                    </div>
                </div>
                <div className = "root__main">
                    <div className = "root__main__title">Running with Strangers in Vancouver</div>
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