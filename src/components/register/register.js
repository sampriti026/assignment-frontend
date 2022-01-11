import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = ({}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        phoneNumber:"",
        gender:"",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, phoneNumber, gender } = user
        if( name && phoneNumber && gender){
            axios.post("http://localhost:4000/api/signup", user)
            .then( res => {
                alert("Verify OTP")
                history.push("/verifyOtp")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="phoneNumber" value={user.phoneNumber} placeholder="Your Phone Number" onChange={ handleChange }></input>
            <input type="text" name="gender" value={user.gender} placeholder="Gender" onChange={ handleChange }></input>
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
    )
}

export default Register