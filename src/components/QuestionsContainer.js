import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import QuestionCard from './QuestionCard'

function QuestionsContainer ({ questions, quiz }) {
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1
        }
      }))

      const classes = useStyles()

    const handleFormSubmit = event => {
        event.preventDefault()
    }

    const displayQuestions = questions.map(question => {
        return <QuestionCard key={question.id} question={question} />
    })

    return (
        <Grid container className={classes.root} justifyContent="center" spacing={2}>

            <form onSubmit={handleFormSubmit}>
                {displayQuestions}
                <Link to={{
                    pathname: `/quizzes/${quiz.id}/results`,
                    state: { quiz: quiz }
                }} >
                    <Button variant="contained" color="primary" type="submit">Complete Quiz</Button>
                </Link>
            </form>

        </Grid>

    )
}

export default QuestionsContainer
