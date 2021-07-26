import { Link } from 'react-router-dom'
import UserMessage from './UserMessage'


import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

function Signup ({ userMessage, setUserMessage }) {

    const signUpUser = event => {
        event.preventDefault()

        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: event.target[0].value,
                email: event.target[2].value,
                password: event.target[4].value
            })
        })
        .then(res => res.json())
        .then(res => {
            if (res.id) {
                setUserMessage(["You have successfully signed up. Click the login button to start taking quizzes!"])
            } else {
                setUserMessage([res.error])
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
            <h2>Sign Up</h2>
            <UserMessage userMessage={userMessage} />


            <form className={classes.root} autoComplete="off" onSubmit={event => signUpUser(event)}>
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <TextField id="outlined-basic" label="Email" variant="outlined" type="email" />
                <TextField id="outlined-basic" label="Password" variant="outlined" type="password" />
                <Button variant="contained" color="primary" type="submit">Sign Up</Button>
            </form>

            <p>
                Already have an account?
                <Link to="/login"> Click here to login </Link>
            </p>
        </div>
    )
}

export default Signup
