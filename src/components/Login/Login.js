import './Login.css';

const Login = () => {
    const loginBox = <span>Login please</span>
    const welcomeBox = <span>Welcome!</span>
    const isLoggedIn = true;
    return (
      <div className="login">
        {isLoggedIn ? welcomeBox : loginBox}
      </div>
    )
  }

  export default Login;