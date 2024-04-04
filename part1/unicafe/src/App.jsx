import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ clicks }) => {
  const totalClicks = clicks.good + clicks.bad + clicks.neu;
  const average =
    ((clicks.good * 1 + clicks.neu * 0 + clicks.bad * -1) / totalClicks) * 100;
  const positiveFeedBack = (clicks.good / totalClicks) * 100;

  return (
    <div>
      <h2>Statistics</h2>
      <p>Bad: {clicks.bad} </p>
      <p>Good: {clicks.good}</p>
      <p>Neutral: {clicks.neu}</p>
      <p>Total: {totalClicks}</p>
      <p>Average: {average.toFixed(2)}</p>
      <p>Positive Feedback Percentage: {positiveFeedBack.toFixed(2)}%</p>
    </div>
  );
};

const StatisticsLine = ({ text, value }) => {
  return (
    <div>
      <p>
        {text}: {value}
      </p>
    </div>
  );
};

const App = () => {
  // const [good, setGood] = useState(0);
  // const [neu, setNeu] = useState(0);
  // const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [clicks, setClicks] = useState({ good: 0, bad: 0, neu: 0 });

  const handleGoodClick = () => {
    const newClicks = {
      good: clicks.good + 1,
      bad: clicks.bad,
      neu: clicks.neu,
    };
    setClicks(newClicks);
    setAll(allClicks.concat("G"));
  };
  const handleNeuClick = () => {
    const newClicks = {
      good: clicks.good,
      bad: clicks.bad,
      neu: clicks.neu + 1,
    };
    setAll(allClicks.concat("N"));
    setClicks(newClicks);
  };
  const handleBadClick = () => {
    const newClicks = {
      good: clicks.good,
      bad: clicks.bad + 1,
      neu: clicks.neu,
    };
    setAll(allClicks.concat("B"));
    setClicks(newClicks);
  };
  const shouldDisplayStatistics = allClicks.length > 0;

  return (
    <div>
      <h1>Give feedback</h1>
      <div className="btns">
        <Button handleClick={handleBadClick} text="Bad" />
        <Button handleClick={handleGoodClick} text="Good" />
        <Button handleClick={handleNeuClick} text="Neutral" />
      </div>
      {shouldDisplayStatistics && <Statistics clicks={clicks} />}
    </div>
  );
};

export default App;
