import { Link } from 'react-router-dom'
import UserMessage from './UserMessage'

function Signup ({ userMessage, setUserMessage }) {

    let signUpUser = event => {
        event.preventDefault()

        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: event.target[0].value,
                email: event.target[1].value,
                password: event.target[2].value
            })
        })
        .then(res => res.json())
        .then(() => setUserMessage(["You have successfully signed up. Click the login button to start taking quizzes!"]))
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <UserMessage userMessage={userMessage} />

            <form onSubmit={event => signUpUser(event)}>
                <label>Name</label>
                <input name="name" type="text" />

                <label>Email</label>
                <input name="email" type="email" />

                <label>Password</label>
                <input name="password" type="password" />

                <input type="submit" />
            </form>
            <p>
                Already have an account?
                <Link to="/login"> Click here to login </Link>
            </p>
        </div>
    )
}

export default Signup
