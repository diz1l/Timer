import { useState, useContext } from "react";
import TimerContext from "../context/TimerContext";


export default function Settings() {
  const [focusMinutes, setFocusMinutes] = useState(25)
  const [breakMinutes, setBreakMinutes] = useState(5)
  const timeContext = useContext(TimerContext);

  return (
    <form className="settings" onSubmit={(e) => {
      e.preventDefault();
      timeContext?.setCustomTimes(focusMinutes, breakMinutes);
    }}>
      <label>
        Focus Time (minutes)
        <input type="number" min="1" value={focusMinutes} onChange={(e) => {
          const newValue = Number(e.target.value);
          if (newValue >= 1) {
            setFocusMinutes(newValue);
          }
        }} />
      </label>
      <label>
        Break Time (minutes)
        <input type="number" min="1" value={breakMinutes} onChange={(e) => {
          const newValue2 = Number(e.target.value);
          if (newValue2 >= 1) {
            setBreakMinutes(newValue2);
          }
        }} />
      </label>
      <button className="btn">Save</button>
    </form>
  )
}
