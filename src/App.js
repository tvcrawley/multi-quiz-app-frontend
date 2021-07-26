import { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import AuthContainer from './components/AuthContainer'
import QuizContainer from './components/QuizContainer'
import QuizCard from './components/QuizCard'
import Results from './components/Results'

function App() {

  const logout = () => {
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
                  <Link to="/quizzes">Quizzes</Link>
                </li>
                <li>
                  <button onClick={() => logout()}>Log Out</button>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
          <Route exact path="/" >
              <AuthContainer />
            </Route>

            <Route exact path="/quizzes/:id/results" >
              <Results />
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
