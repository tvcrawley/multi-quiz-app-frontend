import { Link } from 'react-router-dom'
import UserMessage from './UserMessage'

function login ({ userMessage, setUserMessage }) {

    const loginUser = event => {
        event.preventDefault()

        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: event.target[0].value,
                password: event.target[1].value
            })
        })
        .then(res => res.json())
        .then(userInfo => {
            localStorage.token = userInfo.token
            localStorage.userEmail = userInfo.email
            setUserMessage(["You have successfully logged in"])
        })
    }

    return (
        <div>
            <h2>Login</h2>
            <UserMessage userMessage={userMessage} />

            <form onSubmit={event => loginUser(event)}>
                <label>Email</label>
                <input name="email" type="email" />

                <label>Password</label>
                <input name="password" type="password" />

                <input type="submit" />
            </form>
            <p>
                Don't have an account?
                <Link to="/signup"> Click here to sign up </Link>
            </p>
        </div>
    )
}

export default login
