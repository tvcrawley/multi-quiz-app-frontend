import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'

function Results () {
    const location = useLocation()
    const { quiz } = location.state
    const [result, setResult] = useState([])

    fetch(`http://localhost:3000/question_responses/${quiz.id}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.token}`,
        }
    })
    .then(res => res.json())
    .then(res => setResult(res))

    return (
       <div>
           <h3>Results for {quiz.name}</h3>
           <p>Correct answers: {result}</p>
           <Link to="/quizzes"> Click to take another quiz! </Link>
       </div>
    )
}

export default Results
