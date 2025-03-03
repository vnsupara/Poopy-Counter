import './App.css';
import { useState } from 'react';
import React from 'react';

// displays count for each day of the week
const Week = ({ counts }) => {
  return (
    <>
      <p>Monday: {counts.Mon}</p>
      <p>Tuesday: {counts.Tue}</p>
      <p>Wednesday: {counts.Wed}</p>
      <p>Thursday: {counts.Thu}</p>
      <p>Friday: {counts.Fri}</p>
      <p>Saturday: {counts.Sat}</p>
      <p>Sunday: {counts.Sun}</p>
    </>
  );
};

// buttons to select what day of the week it is
const WeekSelector = ({ selectedDay, setSelectedDay }) => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="week-buttons">
      {days.map((day) => (
        <button
          key={day}
          onClick={() => setSelectedDay(day)}
          className={selectedDay === day ? "selected-day" : "day-button"}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

// main()
function App() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const getInitialCounts = () => days.reduce((acc, day) => ({ ...acc, [day]: 0 }), {});
  const [counts, setCounts] = useState(
    days.reduce((acc, day) => ({ ...acc, [day]: 0 }), {})
  );

  const [selectedDay, setSelectedDay] = useState("Mon"); // Default selected day

  const updateCount = (amount) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [selectedDay]: prevCounts[selectedDay] + amount,
    }));
  };

  const weekTotal = Object.values(counts).reduce((acc, count) => acc + count, 0);

  const resetCounts = () => {
    setCounts(getInitialCounts());
  }

  return (
    <div className="App">
      <h1>Weekly Poopy Counter</h1>

      <WeekSelector selectedDay={selectedDay} setSelectedDay={setSelectedDay} />

      <h2>Selected Day: {selectedDay}</h2>
      <h2>{selectedDay} Count: {counts[selectedDay]}</h2>
      <h3>Total Count (for the week): {weekTotal}</h3>

      <button onClick={() => updateCount(-1)}>-</button>
      <button onClick={() => updateCount(1)}>+</button>

      <Week counts={counts} />

      <button onClick={resetCounts} className = "reset-button">RESET </button>


    </div>
  );
}

export default App;
