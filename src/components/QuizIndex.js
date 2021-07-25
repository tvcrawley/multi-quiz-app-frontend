function QuizIndex ({quizzes}) {

    const names = quizzes.map(quiz => quiz.name)    
    return (
        <div>
            {names}
        </div>
    )
}

export default QuizIndex
