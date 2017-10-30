import React, {Component} from "react";
import {render} from "react-dom";
import App from "./app.jsx";
import uuid from "uuid";
import runData from "./data.json";

const updatedRunData = runData.days.map(day => {
    const updatedEvents = day.events.map(evt => {
        return Object.assign(evt, {id: uuid.v4(), collapsed: true});
    });
    return Object.assign(day, {events: updatedEvents});    
});

render(
    <App runData = {updatedRunData}/>, 
    document.getElementById("app")
);