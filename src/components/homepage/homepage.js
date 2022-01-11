import React from "react"
import "./homepage.css"

const Homepage = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <h1>Homepage</h1>
            <input type="text" name="amount" placeholder="Amount" ></input>
            <input type="text" name="upi" placeholder="UPI ID" ></input>
            <div className="button" onClick={() => setLoginUser({})} >Send Request</div>or
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage