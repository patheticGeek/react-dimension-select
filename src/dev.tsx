import '@styles/tailwind.css'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

/**
 * Strictly for dev mode, allows you to test out your package in dev
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
