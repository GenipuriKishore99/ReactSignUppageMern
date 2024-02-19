import './user-registration.component.css';
import {useFormik} from 'formik';
import  * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { getUserInfo, saveUserInfo } from '../../../services/userregister.service';
import { useState } from 'react';
// import {useCookie} from 'react-cookie';
// import { RegistartionUserView } from '../registration-view/registrationview.component';
// import { RegistartionUserView } from '../registration-view/registrationview.component';
export const UserRegistration=()=>{
    
    const navigate=useNavigate();
    const [userData,setUserData]=useState([])
    const [userErr,setUserErr]=useState('')
    const [color,setColor]=useState('')
    const formik=useFormik({
        initialValues:{
            "FullName":"",
            "Email":"",
            "UserName":"",
            "Password":"",
            "RepeatPassword":""
        },
        onSubmit:(values)=>{
          saveUserInfo(values).then(()=>{
            alert("data saved");
            window.location.reload();
          })
          navigate("/signin")

        },
        validationSchema:yup.object({
            "FullName":yup.string().required("Name is mandatary")
            .min(4,'Name is short').max(15,'Name is longer'),
            "Email": yup.string().email('Invalid email').required("Email is required").matches(/^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/),
            "UserName":yup.string().required("User Name is Mandatary")
            .min(4,'Name is short').max(15,'Name is longer'),
            "Password":yup.string().required("").min(6,"Min 6 characters"),
            "RepeatPassword":yup.string().required("")
        })  
    })
   
    function verifyId(e){
        getUserInfo().then((res)=>{
            setUserData(res.data)
            for(var user of userData){
                if(user.UserName===e.target.value){
                    setUserErr("UserName is Taken-Try Another")
                    setColor("text-warning")

                }
                else{
                    setUserErr("UserName is Availble")
                    setColor("text-success")
                }
            }

        })
    }

    return(
        <div className="container-fluid boder border-2 border-danger">
        
        <div className="row">
            
            <div className="col-6 border border-1 border-primary rounded img-banner w-25 ">
               
            </div>
            <div className="col-6 border border-1 border-secondary rounded w-50">
                <form onSubmit={formik.handleSubmit}>
                
                    <div className='mt-3 text-h4'><h4>Sign Up</h4></div>
                
                <div>
                    <label className="form-label">FullName<sup className="text-danger">*</sup></label>
                    <input type="text" className="form-control" onKeyUp={verifyId} placeholder='Name' name="FullName" onChange={formik.handleChange}></input>
                </div>
                <p className={color}>{userErr}</p>
                <p className='text-danger'>{formik.errors.FullName}</p>
                <div>
                    <label className="form-label">Email<sup className="text-danger">*</sup></label>
                    <input type="email" className="form-control" placeholder='Email address...' name="Email" onChange={formik.handleChange}></input>
                </div>
                <p className='text-danger'>{formik.errors.Email}</p>
                <div>
                    <label className="form-label">UserName <sup className="text-danger">*</sup></label>
                    <input type="text" className="form-control" placeholder='Username...' name="UserName" onChange={formik.handleChange}></input>
                </div>
                <p className='text-danger'>{formik.errors.UserName}</p>
                <div>
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder='**********' name="Password" onChange={formik.handleChange}></input>
                </div>
                <p className='text-danger'>{formik.errors.Password}</p>
                <div>
                    <label className="form-label">RepeatPassword</label>
                    <input type="password" className="form-control" placeholder='*********' name="RepeatPassword" onChange={formik.handleChange}></input>
                </div>
                <p className='text-danger'>{formik.errors.RepeatPassword}</p>
                <div className="m-2">
                    <input type="checkbox"></input><span>I agree to the <a href="#kishore" className="text-none">Terms of user</a></span>
                </div>
                <div className="m-3">
                    <input type="submit" value="SignUp" className='btn btn-success w-50'></input>
                    <Link to="/signin">Signin</Link><span className='bi bi-arrow-right'></span>
                </div>
            


                </form>


            </div>
                
            

        </div>
            
        {/* <RegistartionUserView></RegistartionUserView> */}
        {/* <RegistartionUserView></RegistartionUserView> */}a

        </div>
    )

}

