import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { getUserDetails } from "../actions/userActions";
import { useNavigate } from "react-router-dom";

const ProfileScreen = () => {
  const [first_name, setFirst_name] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  

  

  const dispatch = useDispatch();
  // const location = useLocation();
  const navigate = useNavigate();


  const userDetail = useSelector( state=>state.userRegister)
  const { error, loading, userInfo } = userRegister

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect,error, loading]);

  const submitHandler = (e) => {
    e.preventDefault();

    if(password !== confirmPassword){
      setMessage('Password do not match')
    
    }
    else {
          dispatch(register(first_name, email, password));

    }
    
  };




  return (
    <div>
      ProfileScreen
    </div>
  )
}

export default ProfileScreen