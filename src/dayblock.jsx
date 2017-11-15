import React, {Component} from "react";

const DayBlockItem = ({event, onEventDetailChange}) => {
    //Details Visibility Here.
    const details = !(event.collapsed) ? 
        <DayBlockDetails 
            description = {event.description} 
            location = {event.location}/> : null;
    return (
        <div className = "root__main__block__item">
            <div className = "root__main__block__item__header" onClick = {onEventDetailChange.bind(this, event.id)}>
                <span className = "root__main__block__item__header__name">
                    <span className = "root__main__block__item__header__text">{event.group}</span>
                    <span className = "root__main__block__item__header__name__time"> {event.start} - {event.end}</span>
                </span>
                <span className = "root__main__block__item__header__dropdown"></span>
            </div>
            {details}           
        </div>
    )
};

const DayBlockDetails = ({description, location}) => (
    <div className = "root__main__block__item__details">
        {description}<br/>
        {location}
        <div className = "root__main__block__item__details__description"></div>
        <div className = "root__main__block__item__details__location"></div>
        <div className = "root__main__block__item__details__map"></div>
        <div className = "root__main__block__item__details__social"></div>
    </div>
);

export default ({events, day, onEventDetailChange}) => (
    <div className = "root__main__block">
        <div id = {day} className = "root__main__block__title">{day}</div>
        {
            events.map((evt, index) => 
                <DayBlockItem key = {index} 
                    event = {evt}
                    onEventDetailChange = {onEventDetailChange}/>
            )            
        }
    </div>
);