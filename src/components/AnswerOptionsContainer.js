import { useState } from 'react'
import AnswerOptionsCard from './AnswerOptionsCard'
import UserMessage from './UserMessage'

function AnswerOptionsContainer ({ answerOptions }) {
    const [selectedOption, setSelectedOption] = useState('')
    const [userMessage, setUserMessage] = useState([])

    const displayAnswerOptions = answerOptions.map(answerOption => {
    return <AnswerOptionsCard
                key={answerOption.id}
                answerOption={answerOption}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                setUserMessage={setUserMessage}
                />
    })

    return (
        <div>
            <UserMessage userMessage={userMessage} />
            {displayAnswerOptions}
        </div>
    )
}

export default AnswerOptionsContainer
