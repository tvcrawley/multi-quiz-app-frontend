import { useState } from 'react'

function AnswerOptionsContainer ({ answerOptions }) {
    const [selectedOption, setSelectedOption] = useState('')

    const onHandleChange = event => {
        setSelectedOption(event.target.value)
    }

    const displayAnswerOptions = answerOptions.map(answerOption => {
        return <div key={answerOption.id}>
            <label>
            <input
                type="radio"
                name={answerOption.answer_text}
                value={answerOption.answer_text}
                onChange={onHandleChange}
                checked={selectedOption === answerOption.answer_text }
            />
            {answerOption.answer_text}
            </label>
        </div>        
    })

    return (
        <div>
            {displayAnswerOptions}
        </div>
    )
}

export default AnswerOptionsContainer
