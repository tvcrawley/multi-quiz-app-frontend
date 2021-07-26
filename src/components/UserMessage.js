function UserMessage ({ userMessage }) {
    const displayMessages = userMessage.map(message => {
        return <p key={message}>{message}</p>
    })
    return (
        <div>
            {displayMessages}
        </div>
    )
}

export default UserMessage
