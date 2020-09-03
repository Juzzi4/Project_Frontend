import React, {useState} from 'react'
import { navigate } from "@reach/router"

function SignInForm(props) {
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [instrument, setInstrument] = useState("")
    
    const handleFirstNameChange = (evt) => {
        setFirstName(evt.target.value)
    }

    const handleLastNameChange = (evt) => {
        setLastName(evt.target.value)
    }

    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }

    const handleInstrumentChange = (evt) => {
        setInstrument(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                first_name,
                last_name,
                username,
                password,
                instrument
            })
        })
        .then(resp => resp.json())
        .then(data => {
            const user = data.user;
            localStorage.setItem("user", JSON.stringify(user));
            navigate(`/`)
        })
        setFirstName("")
        setLastName("")
        setUsername("")
        setPassword("")
        setInstrument("")
    }
    const formDivStyle = {
        margin: "auto",
        padding: "20px",
        width: "80%"
    }
    
    return(
        <div className="min-vh-100">
        <div style={formDivStyle}>
            <h1>Sign Up</h1>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>First Name:</label>
                    <input value={first_name} onChange={handleFirstNameChange} type="text" placeholder="First Name"/>  
                </div>
                <div className="field">
                    <label>Last Name:</label>
                    <input value={last_name} onChange={handleLastNameChange} type="text" placeholder="Last Name"/>
                </div>
                <div className="field">
                    <label>Username:</label>
                    <input value={username} onChange={handleUsernameChange} type="text" placeholder="Username"/>
                </div>
                <div className="field">
                    <label>Password:</label>
                    <input value={password} onChange={handlePasswordChange} type="password" placeholder="Password"/>
                </div>
                <div className="field">
                    <label>Instrument:</label>
                    <input value={instrument} onChange={handleInstrumentChange} type="text" placeholder="Instrument"/>
                </div>

                <button className="ui button" type="submit">Sign Up</button>
            </form>
        </div>
    </div>
    )
}

export default SignInForm