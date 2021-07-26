function AnswerOptionCard ({ answerOption, selectedOption, setSelectedOption }) {
    const onHandleChange = event => {
        fetch("http://localhost:3000/question_responses", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userEmail: localStorage.userEmail,
                answerOptionId: answerOption.id
            })
        })
        .then(res => res.json())
        .then(res => {
            if (res.id) setSelectedOption(event.target.value)
            else console.log(res)
        })
    }

    return (
        <div>
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
    )
}

export default AnswerOptionCard
