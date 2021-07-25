import { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import '../App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import QuizIndex from './components/QuizIndex'

function App() {

  let logout = () => {
    localStorage.clear()
  }

  const [quizzes, setQuizzes] = useState([])
  useEffect(() => {
      fetch("http://localhost:3000/quizzes", {
          method: "GET",
          headers: {
              Authorization: `Bearer ${localStorage.token}`
          }
      })
      .then(res => res.json())
      .then(quizzes => {
          setQuizzes(quizzes)
      })
  }, [])

  return (
    <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <nav>
              <ul>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/quizzes">Quizzes</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/signup" >
              <Signup />
            </Route>
            
            <Route path="/login" >
              <Login />
            </Route>

            <Route path="/quizzes" >
              <QuizIndex quizzes={quizzes} />
            </Route>
        </Switch>
        <button onClick={() => logout()}>Log Out</button>
      </div>
    </BrowserRouter>
  )
}

export default App
