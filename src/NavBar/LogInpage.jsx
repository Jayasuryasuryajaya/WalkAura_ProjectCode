import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import icon from '../Images/icon.png'
import * as Yup from 'yup';
import { LoginSocialGoogle } from 'reactjs-social-login'
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
// import axios from 'axios';

const LogInpage = () => {
  const navigate = useNavigate()
  const [ValidateNumber,setValidateNumber]=useState('')
    const getLoginData=async ()=>{
      // try{
      //   const GetAlready=await axios.get('http://localhost:3500/CreateUserData')
      //   const datas=await GetAlready.data;
      //   setValidateNumber(datas[0].number)
      // }catch(e){
      //  setValidateNumber(undefined)
      // }
    }
    getLoginData()

  const formik = useFormik({
    initialValues: {
      Text: ''
    },
    validationSchema: Yup.object({
      Text: Yup.number('Enter proper email formate').required('This field is required')
    }),
    onSubmit:(data)=>{
      if(ValidateNumber===data.Text){
        navigate('/')
      }else{
        toast.warning('You do not have a account,First create Your Account!')
      }
    }
  })

  const handleLoginSuccess = () => {
    toast.success(`Hello! This is a small verification from the ${Provider} team`);
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }
  

  return (
    <div className='bg-dark text-white' style={{ height: '100vh' }}>

      <div className="icon d-flex justify-content-center" >
        <img src={icon} alt="" className="rounded-5 mt-5 m-1" width='40' height='35' /><h4 className='d-flex align-items-center mt-5'>WalkAura</h4>
      </div>
      <div className="container-fluid d-flex flex-column mt-1 align-items-center">

        <div className="row card border-1" style={{ width: '350px', padding: '16px' }}>

          <form action="" onSubmit={formik.handleSubmit}>
            <h2>Sign in</h2>
            <b >Enter email</b><br />
            <input type="text" className="form-control mt-2 border-3 mb-1" name='Text' onChange={formik.handleChange} />
            {formik.errors.Text && formik.touched.Text && (
              <span className='text-danger fw-bold '>{formik.errors.Text}</span>
            )}

            <br />
            <button className="btn btn-dark w-100 mt-2 mb-2" type="submit" >Continue</button><br />
          </form>

          <span>By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and Privacy Notice.</span>
          <p className='mt-1 text-center'>if New to WalkAura?</p>
          <section className=' text-center'>
            <Link to="/CreateAccount">
              <button className='row btn-dark btn w-100'>Create your Aura account</button></Link>

          </section>
          <b className='text-center mt-2 mb-2'>---------- or ----------</b>
          <LoginSocialGoogle
            client_id="172331589830-a12ogcv19gajaht2v6gs8nsi0p7ohrbq.apps.googleusercontent.com"
            access_type="online"
            onSuccess={handleLoginSuccess}
            onReject={(err) => {
              console.error("Login failed:", err);
            }}
          >
            <button className='btn btn-dark d-flex justify-content-center align-items-center w-100'>Sign in with Google<i className='bi bi-google text-danger fw-bold fs-4 ms-2'></i></button>
          </LoginSocialGoogle>

        </div>

      </div>

    </div>
  )
}

export default LogInpage
