import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import MainPrincipal from './components/MainPrincipal'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <MainPrincipal/>
  </React.StrictMode>,
)
