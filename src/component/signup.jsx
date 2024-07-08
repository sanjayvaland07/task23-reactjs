import './signup.css'
function Signup(){
    return (
        <div className="signup-container">
            <div className="signupform">
                <h1>Sign up</h1>
                <div className="inputbox">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='username'/>
                </div>
                <div className="inputbox">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Email'/>
                </div>
                <div className="inputbox">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Password'/>
                </div>
                <div className="inputbox">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" placeholder='Confirm Password'/>
                </div>
                <button>Sign up</button>
            </div>
        </div>
    )
}

export default Signup;