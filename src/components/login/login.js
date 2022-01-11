import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser }) => {
 
    const history = useHistory()

    const [ user, setUser] = useState({
        phoneNumber:"",
        otp:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:4000/api/signin", user)
        .then(res => {
            alert(res.data.message)
            history.push("/verifySigninOtp")
            
        })
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} placeholder="Enter your Phone Number"></input>
            <div className="button" onClick={login}>Verify Otp</div>
            <div>or</div>
            <div className="button" onClick ={() => history.push("/register")}>Register</div>
        </div>
    )
}

export default Login