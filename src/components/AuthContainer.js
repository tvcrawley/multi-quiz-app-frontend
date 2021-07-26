import { useState } from 'react'
import Signup from './Signup'
import Login from './Login'

function AuthContainer () {
    const [userMessage, setUserMessage] = useState([])

    return (
        <div>
              <Signup userMessage={userMessage} setUserMessage={setUserMessage}/>
              <Login userMessage={userMessage} setUserMessage={setUserMessage} />
        </div>
    )
}

export default AuthContainer
