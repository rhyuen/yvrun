import React, {Component} from "react";

const DayBlockItem = (props) => {
    return (
        <div className = "root__main__block__item">
            <div className = "root__main__block__item__header">
                <span className = "root__main__block__item__header__name">
                    <span className = "root__main__block__item__header__text">{props.event.group}</span>
                    <span className = "root__main__block__item__header__name__time"> {props.event.start} - {props.event.end}</span>
                </span>
                <span className = "root__main__block__item__header__dropdown"></span>
            </div>
           <DayBlockDetails 
            description = {props.event.description} 
            location = {props.event.location}/>
        </div>
    )
};

const DayBlockDetails = (props) => (
    <div className = "root__main__block__item__details">
        {props.description}<br/>
        {props.location}
        <div className = "root__main__block__item__details__description"></div>
        <div className = "root__main__block__item__details__location"></div>
        <div className = "root__main__block__item__details__map"></div>
        <div className = "root__main__block__item__details__social"></div>
    </div>
);
export default (props) => (
    <div className = "root__main__block">
        <div id = {props.day} className = "root__main__block__title">{props.day}</div>
        {
            props.events.map((evt, index) => <DayBlockItem key = {index} event = {evt}/>)            
        }
    </div>
);