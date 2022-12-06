import React, { useState, useEffect } from "react";
import Month from "./Month";
import Event from "./Event";
export default function Year() {
  const [date, setDate] = React.useState(new Date());
  let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  function addMonth() {
    setDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));
  }
  function subtractMonth() {
    setDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));
  }
  function reset() {
    setDate(new Date());
  }
  function changeDate(newYear, newDay, newMonth) {
    setDate(new Date(newYear, newMonth, newDay));
  }

  date.setHours(0, 0, 0, 0);
  //added---------------------------------------------------
  const ogFormData = {
    name: "",
    startDate: date.toISOString().substring(0, 10),
    endDate: date.toISOString().substring(0, 10),
    location: "",
    notes: "",
  };
  const [formData, setFormData] = useState(ogFormData);
  // console.log(formData);
  const [display, setDisplay] = React.useState(false);
  const [showDetails, setShowDetails] = React.useState(false);
  const [arrayOfEvents, setArrayOfEvents] = useState([]);
  const [track, setTrack] = useState(false);
  useEffect(() => {
    setFormData((prev) => formData);
    // setArrayOfEvents(formData);
  }, [formData]);
  useEffect(() => {
    // setDate((prev) => date);
    // formData.endDate < formData.startDate && changeDate(formData.endDate);
    setFormData((prev) => {
      return {
        ...prev,
        startDate:
          date.getFullYear() +
          "-" +
          Number(date.getMonth() + 1) +
          "-" +
          date.getDate(),
      };
    });
  }, [date]);

  useEffect(() => {
    // setDate((prev) => date);
    setFormData((prev) => {
      return {
        ...prev,
        endDate:
          date.getFullYear() +
          "-" +
          Number(date.getMonth() + 1) +
          "-" +
          date.getDate(),
      };
    });
    !display &&
      setFormData((prev) => {
        return {
          ...prev,
          endDate:
            date.getFullYear() +
            "-" +
            Number(date.getMonth() + 1) +
            "-" +
            date.getDate(),
        };
      });
  }, [formData.startDate]);

  // console.log(formData);
  function getFormDetails() {
    // console.log(display);
    function handleChange(event) {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          [event.target.name]: event.target.value,
        };
      });
      setTrack((prev) => !prev);
    }
    function handleSubmit(e) {
      e.preventDefault();

      setArrayOfEvents((prev) => [...prev, formData]);
      setFormData((prev) => ogFormData);

      // console.log(arrayOfEvents.map((event) => console.log(event.name)));
      setDisplay((prev) => !prev);
      // console.log(arrayOfEvents)
    }

    function handleStartDate(e) {
      let eventValue = e.target.value;
      const eventDate = eventValue.split("-");
      changeDate(eventDate[0], eventDate[2], eventDate[1] - 1);
      handleChange(e);
    }
    function handleEndDate(e) {
      let eventValue = e.target.value;
      const eventDate = eventValue.split("-");
      // changeDate(eventDate[0], eventDate[2], eventDate[1] - 1);
      handleChange(e);
    }

    return (
      <div className="new-event">
        <button
          className="close-btn"
          onClick={() => setDisplay((prev) => !prev)}
        >
          X
        </button>
        <h1>
          {date.toLocaleString("default", { month: "long" })} {date.getDate()}{" "}
          {date.getFullYear()}
        </h1>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="event-name">Event Name: </label>
          <input
            className="event event-name"
            type="text"
            placeholder="Birthday"
            onChange={handleChange}
            name="name"
            value={formData.name}
            // required
          />

          <label htmlFor="event-start-date">Event Start Date: </label>
          <input
            className="event event-start-date"
            onChange={(e) => handleStartDate(e)}
            name="startDate"
            defaultValue={date.toISOString().substring(0, 10)}
            // value={formData.startDate}
            type="date"

            // required
          />

          <label htmlFor="event-end-date">Event End Date: </label>
          <input
            className="event event-end-date"
            onChange={handleEndDate}
            name="endDate"
            // value={formData.endDate}
            type="date"
            defaultValue={date.toISOString().substring(0, 10)}
            // required
          />

          <label htmlFor="event-location">Event Location: </label>
          <input
            className="event event-location"
            type="text"
            onChange={handleChange}
            name="location"
            value={formData.location}
            placeholder="Location"
          />

          <label htmlFor="event-notes">Event Notes: </label>
          <textarea
            className="event event-notes"
            onChange={handleChange}
            name="notes"
            value={formData.notes}
            placeholder="Notes"
          ></textarea>

          <input type="submit" />
        </form>
      </div>
    );
  }
  //added---------------------------------------------------
  return (
    <div>
      <div className="header">
        <button onClick={subtractMonth}>&#60;</button>
        <h1>
          {date.toLocaleString("default", { month: "long" })} {date.getDate()}{" "}
          {date.getFullYear()}
        </h1>
        <button onClick={addMonth}>&#62;</button>
        <button onClick={reset}>TODAY</button>
        <input
          type="date"
          id="date"
          value={date.toISOString().substring(0, 10)}
          onChange={(event) =>
            setDate(new Date(event.target.value + "T00:00:00"))
          }
        />
      </div>
      <div className="calendar">
        <Month
          firstDay={firstDay.getDay()}
          numDays={daysInMonth(date.getMonth() + 1, date.getYear())}
          prevMonthDays={daysInMonth(date.getMonth(), date.getYear())}
          date={date}
          today={new Date()}
          handleClick={changeDate}
          formData={formData}
          setFormData={setFormData}
          setShowDetails={setShowDetails}
          setDisplay={setDisplay}
          showDetails={showDetails}
          display={display}
          getFormDetails={getFormDetails}
          arrayOfEvents={arrayOfEvents}
        />
      </div>
      {display && getFormDetails()}
    </div>
  );
}
