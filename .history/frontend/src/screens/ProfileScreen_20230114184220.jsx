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


  const userDetails = useSelector( state=>state.userDetails)
  const { error, loading, user } = userDetails

  const userLogin = useSelector( state=>state.userLogin)
  const { userInfo } = userLogin



  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }else{
      if(!user || !user.first_name){
        dispatch(getUserDetails('profile'))
      }else{
        setFirst_name(user.first_name)
        setEmail(user.email)
      }
    }
  }, [dispatch, navigate, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();

    if(password !== confirmPassword){
      setMessage('Password do not match')
    
    }
    else {
          console.log('update')

    }
    
  };




  return (
    <div>
      ProfileScreen
    </div>
  )
}

export default ProfileScreen