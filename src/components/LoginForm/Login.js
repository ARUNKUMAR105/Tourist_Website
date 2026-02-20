import React, { useState } from "react";
import {Container,TextField, Button, Typography, Box, Paper, Tabs, Tab, Alert} from "@mui/material";
import { useNavigate } from "react-router-dom";

function LoginRegister() {
  const [tab, setTab] = useState(0);
  const [registerData, setRegisterData] = useState({name:"",email: "",password: "",confirmpassword:""});
  const [loginData, setLoginData] = useState({email: "",password: ""});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!registerData.name || !registerData.email || !registerData.password || !registerData.confirmpassword ) {
      setMessage("Please fill all fields");
      return;
    }
    if(registerData.password != registerData.confirmpassword ){
        setMessage("Password and Confirm Password Mismatch");
        return;
    }

    localStorage.setItem("user", JSON.stringify(registerData));
    setMessage("Registration successful. Please login.");
    setTab(1);
  };

  const handleLogin = () => { 
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setMessage("No user found. Please register first.");
      return;      
    } 

    if (loginData.email === storedUser.email && loginData.password === storedUser.password) {
      setMessage("Login successful");
      setTimeout(() => {
        navigate("/");
        alert("Welcome back!");
      }, 1000);
    } else {
      setMessage("Invalid email or password");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 8, p: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login & Register
        </Typography>

        <Tabs
          value={tab}
          onChange={(e, v) => {
            setTab(v);
            setMessage("");
          }}
          centered
          sx={{ mb: 3 }}
        >
          <Tab label="Register" />
          <Tab label="Login" />
        </Tabs>

        {message && (
          <Alert
            severity={  message.includes("successful") ? "success" : "error"}
            sx={{ mb: 2 }}
          >
            {message}
          </Alert>
        )}

        {tab === 0 && (
          <Box>
                <TextField
              label="Name"
              type="text"
              fullWidth
              margin="normal"
              value={registerData.name}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  name: e.target.value
                })
              }
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  email: e.target.value
                })
              }
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  password: e.target.value
                })
              }
            />
                <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              margin="normal"
              value={registerData.confirmpassword}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                 confirmpassword: e.target.value
                })
              }
            />

            
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handleRegister}
            >
              Register
            </Button>
          </Box>
        )}

        {tab === 1 && (
          <Box>
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  email: e.target.value
                })
              }
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  password: e.target.value
                })
              }
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default LoginRegister;
