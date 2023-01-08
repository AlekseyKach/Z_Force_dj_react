import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { register } from "../actions/userActions";
import { useNavigate } from "react-router-dom";



const RegisterScreen = () => {

  const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
  
    const redirect = location.search ? location.search.split("=")[1] : "/";
  
    const userLogin = useSelector((state) => state.userLogin);
    const { error, loading, userInfo } = userLogin;
  
    useEffect(() => {
      if (userInfo) {
        navigate(redirect);
      }
    }, [navigate, userInfo, redirect]);
  
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(login(email, password));
    };

  return (
    <div>RegisterScreen</div>
  )
}

export default RegisterScreen