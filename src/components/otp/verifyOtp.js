import React, {useState} from "react"
import "./verifyOtp.css"
import axios from "axios"
import { useHistory } from "react-router-dom"



const VerifyOtp = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        otp:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const verifyOtp = () => {
        axios.post("http://localhost:4000/api/verifyOtp", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }

    return (
        <div className="verifyOtp">
            <h1>Enter OTP</h1>
            <input type="number" name="otp" value={user.otp} onChange={handleChange} placeholder="OTP"></input>
            <div className="button" onClick={verifyOtp}>Verify OTP</div>
        </div>
    )
}

export default VerifyOtp