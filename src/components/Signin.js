import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "./Signin.css";
import whatsapp from "../images/whatsapp.png";
import google from "../images/google.png";
import { Button, Card, CardContent } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/setup";
const Signin = () => {
  const googleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ height: "230px", backgroundColor: "#00a884" }}
      >
        <Toolbar>
          <div className="nav-content">
            <img className="logo" src={whatsapp} />
            <h3 className="title">WHATSAPP WEB</h3>
          </div>
          <Card className="box">
            <CardContent className="signin-card">
              <div>
                <h2 className="description">Use WhatsApp on your computer</h2>
                <h5 className="step">1. Open whatschat on your computer</h5>
                <h5 className="step">2. Signin using google account</h5>
                <h5 className="step">3. Signin using phone number</h5>
              </div>
              <div onClick={googleSignin} className="signin-btn">
                <img className="google" src={google}></img>
              </div>
            </CardContent>
            <Button color="success">Signin with phone number</Button>
          </Card>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Signin;
