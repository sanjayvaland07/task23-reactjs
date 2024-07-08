import './login.css'
import logo from '../assets/coding.png'
function Login(){
    return (
        <div className="container">
            <div className="loginform">
                <img src={logo} alt="logo" className="formlogo" />
                <div className="inputbox">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='username'/>
                </div>
                <div className="inputbox">
                    <label htmlFor="">Password</label>
                    <input type="text" placeholder='password'/>
                    <br />
                    <a href="">forget password?</a>
                </div>
                <button>Login</button>
            </div>
        </div>
    )
}

export default Login;