import { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Signup from './components/Signup'
import Login from './components/Login'
import QuizContainer from './components/QuizContainer'
import QuizCard from './components/QuizCard'
import Results from './components/Results'
import './App.css'

function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      // textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }))


  const [userMessage, setUserMessage] = useState([])
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

  const classes = useStyles()

  return (
    <BrowserRouter>

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Navbar />
              Multi Quiz App
            </Paper>
          </Grid>
        </Grid>
      </div>

      <Switch>
        <Route exact path="/home" >
          <Welcome />
        </Route>

        <Route exact path="/signup" >
          <Signup userMessage={userMessage} setUserMessage={setUserMessage}/>
        </Route>

        <Route exact path="/login" >
          <Login userMessage={userMessage} setUserMessage={setUserMessage}/>
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
    </BrowserRouter>
  )
}

export default App
