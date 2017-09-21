import React, {Component} from "react";

const DayBlockItem = (props) => {
    return (
        <div className = "root__main__block__item">
            <div className = "root__main__block__item__header">
                <span className = "root__main__block__item__header__name">
                    {props.event.group} 
                    <span className = "root__main__block__item__header__name__time"> {props.event.start} - {props.event.end}</span>
                </span>
                <span className = "root__main__block__item__header__dropdown"></span>
            </div>
            <div className = "root__main__block__item__details">
                {props.event.description}<br/>
                {props.event.location}
            </div>
        </div>
    )
};

export default (props) => (
    <div className = "root__main__block">
        <div id = {props.day} className = "root__main__block__title">{props.day}</div>
        {
            props.events.map((evt) => {
                return (
                    <DayBlockItem event = {evt}/>
                );
            })
        }
    </div>
);