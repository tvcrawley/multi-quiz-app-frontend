import { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import QuizContainer from './components/QuizContainer'
import QuizCard from './components/QuizCard'

function App() {

  const logout = () => {
    localStorage.clear()
  }

  const [quizzes, setQuizzes] = useState([])
  const [userMessage, setUserMessage] = useState([])

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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/quizzes">Quizzes</Link>
                </li>
                <li>
                  <button onClick={() => logout()}>Log Out</button>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/signup" >
              <Signup userMessage={userMessage} setUserMessage={setUserMessage}/>
            </Route>
            
            <Route path="/login" >
              <Login userMessage={userMessage} setUserMessage={setUserMessage} />
            </Route>

            <Route exact path="/quizzes/:id"  >
              <QuizCard />
            </Route>

            <Route path="/quizzes" >
              <QuizContainer quizzes={quizzes} />
            </Route>


        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
