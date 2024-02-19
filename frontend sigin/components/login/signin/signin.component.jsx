// import { useState } from "react"
import { getUserInfo } from "../../../services/userregister.service"
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import {useCookies} from 'react-cookie';
export function SignIn(){
    const [cookies,setCookie,removeCookie]=useCookies();
    // const [userData,setUserData]=useState([]);
    const navigate=useNavigate();
    
    const formik=useFormik({
        initialValues:{
            "UserName":"",
            "Email":"",
            "Password":""
        },
        onSubmit:(values)=>{
            getUserInfo().then((res)=>{
                
                for(var users of res.data){
                    // console.log(users)
                    if(users.UserName ===values.UserName && users.Email===values.Email && users.Password===values.Password){
                        setCookie("userid",values.UserName,{expires:new Date('2024-02-15 23:23:23')})
                        navigate("/home")
                        break;

                    }
                    else{
                        navigate("/invalid")
                       
                    }
                }
            })
            // console.log(userData)

        }
    })
    // function handleData(){
    //     getUserInfo().then((res)=>{
    //         setUserData(res.data)
    //         for(var users of userData){
    //             if(users.UserName===e.target.value){
    //                 setUserNameSuccess("UserName Matched")
    //                 setColor('text-success')

    //             }
    //             else{
    //                 setUserNameErr("UserName is Not Matched Enter Matched Name");
    //                 setColor('text-danger')
    //             }
    //         }

    //     })

    // }
    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
            <div>
               <dt>
                <dt>UserName</dt>
                <dd><input type="text" className="form-control w-25" name="UserName" onChange={formik.handleChange}></input></dd>
                <dt>Email</dt>
                <dd><input type="email" className="form-control w-25" name="Email" onChange={formik.handleChange}></input></dd>
                <dt>Password</dt>
                <dd><input type="password" className="form-control w-25" name="Password" onChange={formik.handleChange}></input></dd>
               </dt>
            </div>
            <div>
                <input type="submit"value="Login" className="btn btn-success"></input>
            </div>

            </form>
            <Link to="/userregistration">Creat a new Account</Link>

        </div>
    )
}