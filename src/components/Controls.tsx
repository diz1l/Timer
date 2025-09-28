import { useContext } from "react";
import TimerContext from "../context/TimerContext";


export default function Controls() {

  const timer = useContext(TimerContext);

  return (
    <div className="controls-container">
      <div className="status">
      <span className="status-text">{timer?.isRunning ? "Running" : "Paused"}</span>
    </div>
    <div className="controls">
      <button className="btn" onClick={timer?.start}>Start</button>
      <button className="btn" onClick={timer?.pause}>Pause</button>
      <button className="btn" onClick={timer?.reset}>Reset</button>
    </div>
    <div className="variants">
      <button className="btn2" onClick={timer?.variants1}>5 min</button>
      <button className="btn2" onClick={timer?.variants2}>10 min</button>
      <button className="btn2" onClick={timer?.variants3}>15 min</button>
    </div>
    </div>
  )
}
