import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'mdui'
import 'mdui/mdui.css'
import './assets/global.less'
import { setColorScheme } from 'mdui'
setColorScheme('#006e1c')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
