import { useState } from 'react'
import AnswerOptionsCard from './AnswerOptionsCard'

function AnswerOptionsContainer ({ answerOptions }) {
    const [selectedOption, setSelectedOption] = useState('')

    const displayAnswerOptions = answerOptions.map(answerOption => {
    return <AnswerOptionsCard
                key={answerOption.id}
                answerOption={answerOption}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                />
    })

    return (
        <div>
            {displayAnswerOptions}
        </div>
    )
}

export default AnswerOptionsContainer
