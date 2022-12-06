import React, { useState, useEffect } from "react";

export default function Event(props) {
  function show() {
    return (
      <div className="showDetails">
        <button
          className="close-btn"
          onClick={() => props.setShowDetails((prev) => !prev)}
        >
          X
        </button>
        <h1>{props.formData.name}</h1>
        <h1>{props.formData.startDate}</h1>
        <h1>{props.formData.endDate}</h1>
        <h1>{props.formData.location}</h1>
        <h1>{props.formData.notes}</h1>
      </div>
    );
  }
  // console.log(props.arrayOfEvents);
  const arrayOfEventsForThisDate = [];
  // props.arrayOfEvents.map(event => arrayOfEventsForThisDate.push(...event))
  const startDateArray = props.arrayOfEvents.map((event) => event.startDate);
  const endDateArray = props.arrayOfEvents.map((event) =>
    event.endDate.split("-")
  );
  // console.log(props.arrayOfEvents);
  let display = "";
  function name(event) {
    // console.log(props.arrayOfEvents);
    // console.log(event);
    props.date.getFullYear() == event.startDate.split("-")[0]
      ? props.date.getMonth() + 1 == event.startDate.split("-")[1]
        ? props.dayOfMonth >= Number(event.startDate.split("-")[2])
          ? props.dayOfMonth <= Number(event.endDate.split("-")[2])
            ? props.id > props.dayOfMonth - props.id &&
              props.id < props.numDays + props.id
              ? (display = event.name)
              : (display = "")
            : (display = "")
          : (display = "")
        : (display = "")
      : (display = "");

    // console.log(props.dayOfMonth + " " + display)
    return display;
  }
  return (
    <div>
      <div
        onClick={() => props.setShowDetails((prev) => !prev)}
        className="eventDisplay"
      >
        {props.arrayOfEvents.map((event) => name(event))}

        {/* {startDateArray.map(startDate => {props.date.getFullYear() == startDate.split("-")[0] &&
          props.date.getMonth() + 1 == startDate.split("-")[1] &&
          props.dayOfMonth >= Number(startDate.split("-")[2]) &&
          endDateArray.map(endDate => props.dayOfMonth <= Number(endDate.split("-")[2])) &&
          props.arrayOfEvents.map(event => event.name)})} */}

        {/* {props.date.getFullYear() == startDateArray[0] &&
          props.date.getMonth() + 1 == startDateArray[1] &&
          props.dayOfMonth >= Number(startDateArray[2]) &&
          props.dayOfMonth <= Number(endDateArray[2]) &&
          props.arrayOfEvents.map(event => event.name)} */}

        {/* {endDateArray[2]} */}
      </div>

      <div>{props.showDetails && show()}</div>
      <div onClick={() => props.handleChangeDate()}>
        <div onClick={() => props.setDisplay((prev) => !prev)}>
          <button
            onClick={props.getFormDetails}
            className="add-events"
            id="addBtn"
          >
            +
          </button>
        </div>
      </div>
      {/* <div className="events">{props.display && event()}</div> */}
    </div>
  );
}
