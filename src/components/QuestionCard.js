import { useEffect, useState } from 'react'
import AnswerOptionsContainer from './AnswerOptionsContainer'

function QuestionCard ({ question }) {
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
        <div>
            <h4>{question.question_text}</h4>
            <img src={question.image} alt={question.question_text}/>
            <AnswerOptionsContainer answerOptions={answerOptions} />
        </div>
    )
}

export default QuestionCard
