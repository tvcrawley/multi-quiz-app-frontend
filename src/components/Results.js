import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

function Results () {
    const location = useLocation()
    const { quiz } = location.state
    const [result, setResult] = useState([])

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1
        },
        paper: {
          height: 250,
          width: 250,
          padding: theme.spacing(2),
          textAlign: 'center'
        }
      }))

      const classes = useStyles()

    fetch(`http://localhost:3000/question_responses/${quiz.id}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.token}`,
        }
    })
    .then(res => res.json())
    .then(res => setResult(res))

    return (
        <Grid container className={classes.root} justifyContent="center" spacing={2}>

            <Grid item>
                <Paper className={classes.paper}>
                    <h3>Results for {quiz.name}</h3>
                    <p>Correct answers: {result}</p>
                    <Link to="/quizzes"> Click to take another quiz! </Link>
                </Paper>
            </Grid>
        </Grid>


    )
}

export default Results
