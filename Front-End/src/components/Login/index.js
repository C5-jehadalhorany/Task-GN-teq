import "./style.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem("token") || "")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const loginF = () => {

        axios.post("http://localhost:5000/login", {
            email,
            password
        }).then((result) => {
            console.log(result.data.token)
            setToken(result.data.token)
            localStorage.setItem("token", JSON.stringify(result.data.token));
            navigate("/")
        }).catch((err) => {
            console.log(err);
        })
    }



    return (
        <div className="loginn">
            <div className="loginDiv">


                <form onSubmit={(e) => {
                    e.preventDefault()
                }} >
                    <br />
                    <input className="input1"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <input className="input2"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <div className="bnnana">
                        <button className="button"
                            onClick={() => {
                                loginF()
                                console.log("sadasdsdadasdasdasdasd");
                            }}
                        >
                            Login
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;
