import { useState } from 'react'
import AnswerOptionsCard from './AnswerOptionsCard'
import ErrorMessage from './ErrorMessage'

function AnswerOptionsContainer ({ answerOptions }) {
    const [selectedOption, setSelectedOption] = useState('')
    const [errorMessage, setErrorMessage] = useState([])

    const displayAnswerOptions = answerOptions.map(answerOption => {
    return <AnswerOptionsCard
                key={answerOption.id}
                answerOption={answerOption}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                setErrorMessage={setErrorMessage}
                />
    })

    return (
        <div>
            <ErrorMessage errorMessage={errorMessage} />
            {displayAnswerOptions}
        </div>
    )
}

export default AnswerOptionsContainer
