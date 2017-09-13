import React, {Component} from "react";

class App extends Component{
    render(){
        return (
            <div className = "root">
                <div className = "root__left">                    
                    <div className = "root__left__logo">LOGO</div>
                    <div className = "root__left__nav">
                        <div className = "root__left__nav__item">                            
                        </div>
                        <div className = "root__left__nav__item">Monday</div>
                        <div className = "root__left__nav__item">Tuesday</div>
                        <div className = "root__left__nav__item">Wednesday</div>
                        <div className = "root__left__nav__item">Thursday</div>
                        <div className = "root__left__nav__item">Friday</div>
                        <div className = "root__left__nav__item">Saturday</div>
                    </div>
                    <div className = "root__left__footer">
                        <div className = "root__left__footer__title">Share on</div>                        
                        <div className = "root__left__footer__icons">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                        </div>
                    </div>
                </div>
                <div className = "root__main">
                    <div className = "root__main__title">Running with Strangers in Vancouver</div>
                    <div className = "root__main__content">Here's a list of days, times and places where strangers run together.  It's all over town.  At all times of day.  Some are even at some ungodly hour of the morning.</div>
                    <div className = "root__main__content">Send more groups of strangers at <a href = "/">yvrun@gmail.com</a></div>
                    <div className = "root__main__block">Sunday</div>                    
                    <div className = "root__main__block">Monday</div>                    
                    <div className = "root__main__block">Tuesday</div>                    
                    <div className = "root__main__block">Wednesday</div>                    
                    <div className = "root__main__block">Thursday</div>                    
                    <div className = "root__main__block">Friday</div>                    
                    <div className = "root__main__block">Saturday</div>                    
                    <footer>
                        <div>Blurb for email signup.</div>
                        <div>Blurb for who did this.</div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default App;