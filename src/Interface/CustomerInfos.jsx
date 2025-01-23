import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const CustomerInfos = () => {
  const [State, setState] = useState(false)
  const [Loading, setLoading] = useState(false)
  const validation = useFormik({
    initialValues: {
      name: '',
      number: "",
      Anumber: '',
      email: '',
      textarea: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().trim().min(4, 'Must be 4 letters').required('This fields are required'),
      number: Yup.number().min(10, 'Enter valid number formate').required('This fields are required'),
      Anumber: Yup.number().min(10, 'Enter valid number formate').nullable(),
      email: Yup.string().email('Enter proper e-mail formate').required('This fields are required'),
      textarea: Yup.string().required('This fields are required')
    }),
    onSubmit: (data) => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setState(true)
      }, 2500)
      console.log(data)
      // try{
      //   axios.post('http://localhost:3500/CustomerInfo',data,{
      //     header:{
      //       "content-type":"application/json"
      //     }
      //   })
      // }catch(err){
      //   console.log(err)
      // }
    }
  })

  return (
    <div>
      <div className="container-fluid bg-dark posiiotn-relative overflow-hidden" style={{ minHeight: '100vh' }}>
        <div className="row">
          {Loading && (
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1,
              }}
            >
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>

              </div>
            </div>
          )}

          {State &&
            <div style={{ minHeight: '100vh' }} className='container-fluid d-flex justify-content-center flex-column align-items-center'>
              <section className='text-center text-white'>
                <b>Your datas has been received, please proceed to  next process</b> <br />
                <Link to='/'>
                  <button className='btn btn-warning mt-5'>Order Placed move to Home page <span><i className="bi bi-check-circle-fill text-success "></i></span></button><br />
                </Link>
                <Link to='/MyOrders'>
                <button className='btn btn-warning mt-3'>View Orders <span className='bi bi-gift-fill text-success'></span></button>
                </Link>


              </section>
            </div>
          }
          <div className=" col card m-3 d-flex flex-column" >
            {!State &&
              <>
                <h4 className="text-dark disable fw-bold"> Seed your informations</h4>
                <form action="" className='' onSubmit={validation.handleSubmit} >
                  <section className=' fw-bolder text-dark d-flex flex-column p-1 gap-2 m-2'>
                    <label htmlFor="name">Name :
                      <input type="text" name='name' id='name' value={validation.values.name} onChange={validation.handleChange} className='form-control ' />

                      {validation.errors.name && validation.touched.name && (<div className='text-danger'>
                        {validation.errors.name}
                      </div>)}
                    </label>

                    <label htmlFor="number">Phone number :
                      <input type="number" name='number' id='number' value={validation.values.number} onChange={validation.handleChange} className='form-control' />
                      {validation.errors.number && validation.touched.number && (<div className='text-danger'>
                        {validation.errors.number}
                      </div>)}
                    </label>

                    <label htmlFor="Anumber">Alternative phone number : (optional)

                      <input type="number" name='Anumber' id='Anumber' value={validation.values.Anumber} onChange={validation.handleChange} className='form-control' />
                      {validation.errors.Anumber && validation.touched.Anumber && (<div className='text-danger'>
                        {validation.errors.Anumber}
                      </div>)}
                    </label>

                    <label htmlFor="email">E-mail :
                      <input type="text" name='email' id='email' value={validation.values.email} onChange={validation.handleChange} className='form-control' />
                      {validation.errors.email && validation.touched.email && (<div className='text-danger'>
                        {validation.errors.email}
                      </div>)}
                    </label>
                    <section className=''>
                      <label htmlFor="textarea">Address : <br />
                        <textarea name="textarea" id="textarea" value={validation.values.textarea} onChange={validation.handleChange} cols='45' rows='4'></textarea>
                        {validation.errors.textarea && validation.touched.textarea && (<div className='text-danger'>
                          {validation.errors.textarea}
                        </div>)}
                      </label>
                    </section>
                    <button className='btn btn-outline-dark' type='submit'>Proceed</button>
                  </section>
                </form>
              </>
            }
          </div>
        </div>
      </div>



    </div>
  )
}

export default CustomerInfos
