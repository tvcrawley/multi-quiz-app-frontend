function login () {

    let loginUser = e => {
        e.preventDefault()

        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: e.target[0].value,
                password: e.target[1].value
            })
        })
        .then(res => res.json())
        .then(userInfo => {
            localStorage.token = userInfo.token
            localStorage.userEmail = userInfo.email
        })
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={e => loginUser(e)}>
                <label>Email</label>
                <input name="email" type="email" />

                <label>Password</label>
                <input name="password" type="password" />

                <input type="submit" />
            </form>
        </div>
    )
}

export default login
