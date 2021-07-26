import { Link } from 'react-router-dom'
import UserMessage from './UserMessage'

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

function Login ({ userMessage, setUserMessage }) {

    const loginUser = event => {
        event.preventDefault()

        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: event.target[0].value,
                password: event.target[2].value
            })
        })
        .then(res => res.json())
        .then(res => {
            if (res.token) {
                localStorage.token = res.token
                localStorage.userEmail = res.email
                setUserMessage(["You have successfully logged in"])
            } else {
                setUserMessage([res.message])
            }
        })
    }

    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }))

      const classes = useStyles()

    return (
        <div>
            <h2>Login</h2>
            <UserMessage userMessage={userMessage} />

            <form className={classes.root} autoComplete="off" onSubmit={event => loginUser(event)}>
                <TextField id="outlined-basic" label="Email" variant="outlined" type="email" />
                <TextField id="outlined-basic" label="Password" variant="outlined" type="password" />
                <Button variant="contained" color="primary" type="submit">Login</Button>
            </form>

            <p>
                Don't have an account?
                <Link to="/signup"> Click here to sign up </Link>
            </p>
        </div>
    )
}

export default Login
