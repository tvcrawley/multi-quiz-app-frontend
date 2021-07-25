function Signup () {

    let signUpUser = e => {
        e.preventDefault()

        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: e.target[0].value,
                email: e.target[1].value,
                password: e.target[2].value
            })
        })
        .then(res => res.json())
        .then(console.log)
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={e => signUpUser(e)}>
                <label>Name</label>
                <input name="name" type="text" />

                <label>Email</label>
                <input name="email" type="email" />

                <label>Password</label>
                <input name="password" type="password" />

                <input type="submit" />
            </form>
        </div>
    )
}

export default Signup
