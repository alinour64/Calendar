import Event from "./Event";
import React, { useState } from "react";
export default function Day(props) {
  function today() {
    let today = false;
    if (
      props.today.getDate() === props.dayOfMonth &&
      props.today.getMonth() === props.date.getMonth() &&
      props.today.getYear() === props.date.getYear()
    ) {
      today = true;
    }
    return today;
  }

  function isSelected() {
    let selected = false;
    if (
      props.date.getDate() === props.dayOfMonth &&
      props.id <= props.numDays + props.firstDay &&
      props.id > props.firstDay
    ) {
      selected = true;
    }
    return selected;
  }

  function changeDate() {
    props.handleClick(
      props.date.getFullYear(),
      props.dayOfMonth,
      props.id <= props.numDays + props.firstDay
        ? props.id > props.firstDay
          ? props.date.getMonth()
          : props.date.getMonth() - 1
        : props.date.getMonth() + 1
    );
  }
  return (
    <div className="days-container">
      <div
        onClick={changeDate}
        className={`${isSelected() ? "day current" : "day notCurrent"} 
        ${today() ? "day today" : "day notToday"}`}
      >
        {props.dayOfMonth}
      </div>
      <Event
        id={props.id}
        today={props.today}
        date={props.date}
        dayOfMonth={props.dayOfMonth}
        firstDay={props.firstDay}
        numDays={props.numDays}
        handleClick={props.handleClick}
        handleChangeDate={changeDate}
        formData={props.formData}
        setFormData={props.setFormData}
        setShowDetails={props.setShowDetails}
        setDisplay={props.setDisplay}
        showDetails={props.showDetails}
        display={props.display}
        getFormDetails={props.getFormDetails}
        arrayOfEvents={props.arrayOfEvents}
      />
    </div>
  );
}
