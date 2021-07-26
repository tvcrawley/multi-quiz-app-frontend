import { Link } from 'react-router-dom'
import QuestionCard from './QuestionCard'

function QuestionsContainer ({ questions, quiz }) {

    const handleFormSubmit = event => {
        event.preventDefault()
    }

    const displayQuestions = questions.map(question => {
        return <QuestionCard key={question.id} question={question} />
    })

    return (
        <form onSubmit={handleFormSubmit}>
            {displayQuestions}
            <Link to={{
                pathname: `/quizzes/${quiz.id}/results`,
                state: { quiz: quiz }
            }} >
                <input type="submit" value="Complete Quiz" />
            </Link>
        </form>
    )
}

export default QuestionsContainer
