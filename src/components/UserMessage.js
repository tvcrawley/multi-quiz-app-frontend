function UserMessage ({ userMessage, color }) {
    const displayMessages = userMessage.map(message => {
        return <p key={message} className={color}>{message}</p>
    })
    return (
        <div>
            {displayMessages}
        </div>
    )
}

export default UserMessage
