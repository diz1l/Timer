import './styles/global.scss'
import TimerDisplay from "./components/TimerDisplay";
import Controls from "./components/Controls";
// import Settings from "./components/Settings";

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Timer App</h1>
      </header>

      <main className="main">
        <TimerDisplay />
        <Controls />
        {/* <Settings /> */}
      </main>
    </div>
  );
}
