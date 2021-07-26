import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

function QuizContainer ({quizzes}) {
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

    const quizLink = quizzes.map(quiz => {
        return <Grid item key={quiz.id}>
            <Paper className={classes.paper}>
                <img src={quiz.image} alt={quiz.name} />

                <Link 
                    to={{
                        pathname: `/quizzes/${quiz.id}`,
                        state: { quiz: quiz }
                        }} 
                    key={quiz.id}>
                    <h3>{quiz.name}</h3>
                </Link>

            </Paper>
          </Grid>
        
    })    
    return (
        <div>
            <h3>Quizzes</h3>

            <Grid container className={classes.root} justifyContent="center" spacing={2}>
                {quizLink}
            </Grid>
        </div>

    )
}

export default QuizContainer
