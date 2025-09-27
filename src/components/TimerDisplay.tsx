import {useContext} from 'react'
import TimerContext from '../context/TimerContext'

export default function TimerDisplay() {

    const timer = useContext(TimerContext);

    const minutes = Math.floor((timer?.time ?? 0) / 60).toString().padStart(2, '0');
    const seconds = ((timer?.time ?? 0)  % 60).toString().padStart(2, '0');
    const results = `${minutes}:${seconds}`;

  return (
    <div className="timer-display">
      <span className="time">{results}</span>
    </div>
  )
}
