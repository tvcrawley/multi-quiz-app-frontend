function Questions ({questions}) {
    const displayQuestions = questions.map(question => {
        return <div key={question.id}>
            <h4>{question.question_text}</h4>
            <img src={question.image} alt={question.question_text}/>
        </div>
    })
    return (
        <div>
            {displayQuestions}
        </div>
    )
}

export default Questions
