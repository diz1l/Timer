import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.tsx'
import { TimerProvider } from './context/TimerContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TimerProvider> 
      <App />
    </TimerProvider>
  </StrictMode>,
)
