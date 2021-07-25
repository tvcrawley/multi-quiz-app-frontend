import { useLocation } from 'react-router-dom'

function QuizShow () {
    const location = useLocation()
    const { quiz } = location.state

    return (
        <div>
            <h3>{quiz.name}</h3>
            <h4>{quiz.description}</h4>
        </div>
    )
}

export default QuizShow
