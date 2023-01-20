import "./App.css";
import profile from "./Image/dp.jpg";
import email from "./Image/email.png";
import password from "./Image/password.png";



function App() {
  return (
    <div className="main">
      <div className="sub-main">
        <div className="image">
          
            <img src={profile} alt="profile" className="profile" />
          
        </div>
        
          <h1>LOGIN PAGE</h1>
        
        <div>
          <img src={email} alt="email" className="email" />
          <input type="text" placeholder="email" className="name" />
          </div>

        <div className="second">
          <img src={password} alt="password" className="email" />
          <input type="password" placeholder="password" className="name" />
        </div>

        <div className="login-button">
        <button>Login</button></div>
        <p className="hyper"> 
      <a href="#">Forget Password ?</a> Or <a href="#">Sign Up</a>
      </p>
      </div>
      
    </div>
  );
}

export default App;
