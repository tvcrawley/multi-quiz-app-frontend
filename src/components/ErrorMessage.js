function ErrorMessage ({ errorMessage }) {
    const displayErrors = errorMessage.map(error => {
        return <p key={error}>{error}</p>
    })
    return (
        <div>
            {displayErrors}
        </div>
    )
}

export default ErrorMessage
