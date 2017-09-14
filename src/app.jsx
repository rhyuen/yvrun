import React, {Component} from "react";

class App extends Component{
    render(){
        const content = [
            {
                day: "Sunday",
                events: [
                    {
                        group: "Super Duper Running Group",
                        start: "6:30pm",
                        end: "8:00pm",
                        location: "Your house",
                        links: [
                            "https://facebook.com",
                            "https://instagram.com",
                            "https://strava.com"
                        ]
                    },
                    {
                        group: "Second Group",
                        start: "4:30am",
                        end: "5:00am",
                        location: "Swamp Town Lake",
                        links: [
                            "https://facebook.com",
                            "https://instagram.com",
                            "https://strava.com"
                        ]
                    }
                ]
            },
            {
                day: "Monday", 
                events: [
                    {
                        group: "Super Duper Running Group",
                        start: "2:30pm",
                        end: "3:00pm",
                        location: "Awesome house",
                        links: [
                            "https://facebook.com",
                            "https://instagram.com",
                            "https://strava.com"
                        ]
                    }
                ]
            },
            {
                day: "Tuesday", 
                events: [
                    {
                        group: "Super Duper Running Group",
                        start: "6:00am",
                        end: "10:00am",
                        location: "Super Duper Park",
                        links: [
                            "https://facebook.com",
                            "https://instagram.com",
                            "https://strava.com"
                        ]
                    }
                ]
            },
            {
                day: "Wednesday", 
                events: [
                    {
                        group: "Super Duper Running Group",
                        start: "6:00am",
                        end: "10:00am",
                        location: "Super Duper Park",
                        links: [
                            "https://facebook.com",
                            "https://instagram.com",
                            "https://strava.com"
                        ]
                    }
                ]
            },
            {
                day: "Thursday", 
                events: [
                    {
                        group: "Super Duper Running Group",
                        start: "6:00am",
                        end: "10:00am",
                        location: "Super Duper Park",
                        links: [
                            "https://facebook.com",
                            "https://instagram.com",
                            "https://strava.com"
                        ]
                    }
                ]
            },
            {
                day: "Friday", 
                events: [
                    {
                        group: "Super Duper Running Group",
                        start: "6:00am",
                        end: "10:00am",
                        location: "Super Duper Park",
                        links: [
                            "https://facebook.com",
                            "https://instagram.com",
                            "https://strava.com"
                        ]
                    }
                ]
            },
            {
                day: "Saturday", 
                events: [
                    {
                        group: "Super Duper Running Group",
                        start: "6:00am",
                        end: "10:00am",
                        location: "Super Duper Park",
                        links: [
                            "https://facebook.com",
                            "https://instagram.com",
                            "https://strava.com"
                        ]
                    }
                ]
            }            
        ]; 

        return (
            <div className = "root">
                <div className = "root__left">                    
                    <div className = "root__left__logo"></div>
                    <div className = "root__left__nav">
                        {
                            content.map((el) => {
                                return (
                                    <div className = "root__left__nav__item">{el.day}</div>
                                );
                            })
                        }                        
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
                    
                    <div className = "root__main__block">
                        <div className = "root__main__block__title">Sunday</div>
                        <div className = "root__main__block__item">
                            <div className = "root__main__block__item__header">
                                <span className = "root__main__block__item__header__name">First One Title</span>
                                <span className = "root__main__block__item__header__dropdown">V</span>
                            </div>
                            <div className = "root__main__block__item__details">
                                On Click of the above, make this viisble.
                            </div>
                        </div>
                        <div className = "root__main__block__item">
                            <div className = "root__main__block__item__header">
                                <span className = "root__main__block__item__header__name">First One Title</span>
                                <span className = "root__main__block__item__header__dropdown">V</span>
                            </div>
                            <div className = "root__main__block__item__details">
                                On Click of the above, make this viisble.
                            </div>
                        </div>
                        <div className = "root__main__block__item">
                            <div className = "root__main__block__item__header">
                                <span className = "root__main__block__item__header__name">First One Title</span>
                                <span className = "root__main__block__item__header__dropdown">V</span>
                            </div>
                            <div className = "root__main__block__item__details">
                                On Click of the above, make this viisble.
                            </div>
                        </div>
                        <div className = "root__main__block__title">Sunday</div>
                        <div className = "root__main__block__item">
                            <div className = "root__main__block__item__header">
                                <span className = "root__main__block__item__header__name">First One Title</span>
                                <span className = "root__main__block__item___header__dropdown">V</span>
                            </div>
                            <div className = "root__main__block__item__details">
                                On Click of the above, make this viisble.
                            </div>
                        </div>   
                    </div>           
                    
                    
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