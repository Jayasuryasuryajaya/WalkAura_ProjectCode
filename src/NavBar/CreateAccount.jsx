import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from '../Images/icon.png';
import * as Yup from 'yup';
import { useFormik } from 'formik'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const CreateAccount = () => {
 const navigate= useNavigate()
    let formik=useFormik({
      initialValues:{
        name:'',
        number:'',
        password:''
      },
      validationSchema: Yup.object({
        name: Yup.string().trim().min(6,'Mininum 6 character contains').required("This field is required"),
        number: Yup.string()
          .matches(/^\d{10}$/, 'Number must be exactly 10 digits')
          .required("This field is required"),
        password: Yup.string()
          .matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, 'Password must contain both letters and numbers')
          .required("This field is required")
      }),
      onSubmit:(data)=> {
        toast.success('Account created sccessfully!',{position :'top-center',autoClose:2000})
        // try{
        //     axios.post('http://localhost:3500/CreateUserData',data,{
        //       header:{
        //         "Content-Type":"application/json"
        //       }
        //     })
        // }catch(err){
        //   console.log(err)
        // };
          setTimeout(()=>{
          navigate('/')
        },2000)
      }
    })
  return (
    <div className='bg-dark'>
      <div className="icon d-flex justify-content-center gap-1" style={{ width: '100%' }}>
        <img src={icon} alt="" className=" rounded-5 mt-3 " width='40' height='35' />
        <h4 className='d-flex align-items-center mt-3 text-white'>WalkAura</h4>
      </div>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="container-fluid d-flex flex-column align-items-center mt-4" style={{ height: '100vh' }}>
          <div className="row">
            <div className="col card border-2 p-3" style={{ width: '380px' }}>
              <h3>Create Account</h3>
              <b>Your name</b>

              <input className='form-control' name='name' type="text" placeholder='First and last name' onChange={formik.handleChange} />

              {formik.errors.name && formik.touched.name && (
                <span className='text-danger fw-bold '>{formik.errors.name}</span>
              )}              <b>Mobile number</b>

              <input type="text" className='form-control' name='number' placeholder='Mobile number' onChange={formik.handleChange} />

              {formik.errors.number && formik.touched.number && (
                <span className='text-danger fw-bold '>{formik.errors.number}</span>
              )}
              <b>Password</b>

              <input type="text" className='form-control' name='password' placeholder='Password' onChange={formik.handleChange} />

              {formik.errors.password && formik.touched.password && (
                <span className='text-danger fw-bold '>{formik.errors.password}</span>
              )}
              <br />
              <p>Provide Vaild informations! </p>
              <button type='submit' className='btn btn-dark'>Create account</button>
              <span className='mt-3 ms-1'>Already have an account?<a href="">Sign in</a></span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
