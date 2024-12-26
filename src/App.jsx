import { useState } from 'react'
import Header from './Header.jsx';
import Form from './Form.jsx';
import Swr from "./Countries.jsx"
import './countries.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Form />
        <div className="countries-list">
          <Swr />
        </div>
      </div>
    </>
  )
}

export default App
