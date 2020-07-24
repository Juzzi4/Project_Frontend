import React, {useState} from 'react'
import { navigate } from "@reach/router"

function LoginForm(props){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        fetch(`https://glacial-shore-77535.herokuapp.com/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(resp => resp.json())
        .then(data => {
            const user = data.user;
            localStorage.setItem("user", JSON.stringify(user))
            navigate(`/browse`)
        })
        setUsername("")
        setPassword("")
    }
    const formDivStyle = {
        margin: "auto",
        padding: "20px",
        width: "80%"
    }
    return(
        <div className="min-vh-100">
            <div style={formDivStyle}>
            <h1>Log In</h1>
            <form class="ui form" onSubmit={handleSubmit}>
                <div class="field">
                    <label>Username:</label>
                    <input value={username} onChange={handleUsernameChange} type="text" placeholder="Username"/>
                </div>
                <div class="field">
                    <label>Password:</label>
                    <input value={password} onChange={handlePasswordChange} type="password" placeholder="Password"/>
                </div>
                
                <button class="ui button" type="submit">Submit</button>
            </form>
        </div>
        </div>
    )
} 

export default LoginForm