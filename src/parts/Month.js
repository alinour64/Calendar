import Day from "./Day";
import Event from "./Event";
export default function Month(props) {
  const daysOfweek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let prevMonthDays = props.prevMonthDays;
  let days = [];
  let j = 1;
  for (let i = 1; i <= 42; i++) {
    if (i - 1 === props.numDays + props.firstDay) {
      j = 1;
    }
    if (i > props.firstDay) {
      days.push(
        <Day
          key={i}
          id={i}
          today={props.today}
          date={props.date}
          dayOfMonth={j++}
          firstDay={props.firstDay}
          numDays={props.numDays}
          handleClick={props.handleClick}
          formData={props.formData}
          setFormData={props.setFormData}
          setShowDetails={props.setShowDetails}
          setDisplay={props.setDisplay}
          showDetails={props.showDetails}
          display={props.display}
          getFormDetails={props.getFormDetails}
          arrayOfEvents={props.arrayOfEvents}
        />
      );
    } else {
      days.push(
        <Day
          key={i}
          today={props.today}
          date={props.date}
          dayOfMonth={++prevMonthDays - props.firstDay}
          id={i}
          firstDay={props.firstDay}
          numDays={props.numDays}
          handleClick={props.handleClick}
          formData={props.formData}
          setFormData={props.setFormData}
          setShowDetails={props.setShowDetails}
          setDisplay={props.setDisplay}
          showDetails={props.showDetails}
          display={props.display}
          getFormDetails={props.getFormDetails}
          arrayOfEvents={props.arrayOfEvents}
        />
      );
    }
  }
  let dayOfWeek = daysOfweek.map((day) => (
    <div key={day} className="dayOfWeek">
      {day}
    </div>
  ));
  return (
    <div>
      <div className="daysOfWeek">{dayOfWeek}</div>
      <div className="day-container">{days}</div>
    </div>
  );
}
