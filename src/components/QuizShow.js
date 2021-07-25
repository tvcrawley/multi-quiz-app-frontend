import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Questions from './Questions'

function QuizShow () {
    const location = useLocation()
    const { quiz } = location.state

    const [questions, setQuestions] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/quizzes/${quiz.id}/questions`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })
        .then(res => res.json())
        .then(questions => {
            setQuestions(questions)
        })
    }, [])

    return (
        <div>
            <h3>{quiz.name}</h3>
            <h4>{quiz.description}</h4>
            <Questions questions={questions}/>
        </div>
    )
}

export default QuizShow
