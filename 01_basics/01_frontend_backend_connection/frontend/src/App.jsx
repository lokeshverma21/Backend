import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
  })
    .catch((error) => {
      console.log(error)
    })
  })
  

  return (
    <>
      <h1>Hello</h1>
      <p>Total Jokes : {jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={joke.id} style={{ border: '1px solid yellow', padding:'20px', }}>
          <p>{joke.id}. {joke.joke}</p>
        </div>
      ))}
    </>
  )
}

export default App
