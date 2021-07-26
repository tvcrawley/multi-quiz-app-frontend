import QuestionCard from './QuestionCard'

function QuestionsContainer ({ questions }) {


    const displayQuestions = questions.map(question => {
        return <QuestionCard key={question.id} question={question} />
    })
    return (
        <div>
            {displayQuestions}
        </div>
    )
}

export default QuestionsContainer
