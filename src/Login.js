import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Auth';
import './App.css'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock credentials
    const validUsername = 'User';
    const validPassword = '12345';
    
    // Here you can add your logic for handling form submission
    if (username === validUsername && password === validPassword) {
      setInvalidCredentials(false);
      console.log('Login successful');
    } else {
      setInvalidCredentials(true);
      return
    }
    // Reset the form fields after submission
    setUsername('');
    setPassword('');
    auth.dispatch({
        type:"LOGIN",
         loginid:username,
          password:password
})
    navigate("/createtemplate")
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
          
              <div className="form-group" style={{ marginLeft: '700px' ,marginTop:"100px"}}>
                <input
                  style={{ borderRadius: '5px', width: "300px", height: "25px" }}
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group" style={{ marginLeft: '700px' }}>
                <input
                  type="password"
                  style={{ borderRadius: '5px', width: "300px", height: "25px" }}
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {invalidCredentials && <p style={{ color: 'red', marginTop: '5px' }}>Invalid credentials. Please try again.</p>}
              <div style={{ display: "flex", flexDirection: "column",marginLeft: '700px'  }}>
                <button type="submit" style={{ borderRadius: '5px', width: "310px", height: "30px",}} >Sign in</button>
                <a href="#">Forgot Password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
