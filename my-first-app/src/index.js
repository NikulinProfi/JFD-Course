import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import Counter from './components/counter'
// const element = <h1>Hello World</h1>

const App = () => {
  return <Counter />
}

// ReactDOM.render(<Component />, document.getElementById('root'))
const counter = document.getElementById('root')
const root = ReactDOM.createRoot(counter)
root.render(<App />)
