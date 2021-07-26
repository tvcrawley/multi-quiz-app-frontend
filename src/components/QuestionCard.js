import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import AnswerOptionsContainer from './AnswerOptionsContainer'

function QuestionCard ({ question }) {
    const useStyles = makeStyles((theme) => ({
        paper: {
        //   height: 250,
        //   width: 250,
          padding: theme.spacing(2),
          textAlign: 'center'
        }
      }))

      const classes = useStyles()
    const [answerOptions, setAnswerOptions] = useState([])

         useEffect(() => {
            fetch(`http://localhost:3000/questions/${question.id}/answer_options`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            })
            .then(res => res.json())
            .then(answerOptions => {
                setAnswerOptions(answerOptions)
            })
        }, [])
        
    return (
        <Grid item>
            <Paper className={classes.paper}>
                <h4>{question.question_text}</h4>
                <img src={question.image} alt={question.question_text}/>
                <AnswerOptionsContainer answerOptions={answerOptions} />
            </Paper>
          </Grid>  
    )
}

export default QuestionCard
