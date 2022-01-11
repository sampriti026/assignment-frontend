import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useState } from 'react';
import VerifyOtp from "./components/otp/verifyOtp"
import VerifySigninOtp from "./components/otp/verifySigninOtp"

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path='/verifyOtp'> <VerifyOtp setLoginUser={setLoginUser} /> </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/verifySigninOtp">
            <VerifySigninOtp setLoginUser={setLoginUser}/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
