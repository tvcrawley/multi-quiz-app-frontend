import { Link } from 'react-router-dom'

function QuizContainer ({quizzes}) {

    const quizLink = quizzes.map(quiz => {
        return <Link 
            to={{
                pathname: `/quizzes/${quiz.id}`,
                state: { quiz: quiz }
            }} 
            key={quiz.id}>
                {quiz.name}
        </Link>
    })    
    return (
        <div>
            {quizLink}
        </div>
    )
}

export default QuizContainer
