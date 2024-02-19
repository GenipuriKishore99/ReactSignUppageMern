// import { Link } from "react-router-dom"
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
export const Home=()=>{
    const [cookies,setCookie,removeCookie]=useCookies();
    const navigate=useNavigate();
    useEffect(()=>{
        if(cookies.userid==undefined){
            navigate("/signin")
        }

    },[])
    function deleteCookie(){
        removeCookie("userid");
        navigate("/signin")
    }
    return(
        <div className="container-fluid">
            <h3>Welcome to user-{cookies.userid}</h3>
           <h3>UserInfo</h3>
           <div className="d-flex">
            <div className="me-3">
            <iframe src="https://www.youtube.com/embed/gh3FyLT7WVg" width="300" height="200"></iframe>
            </div>
            <div>
            <iframe src="https://www.youtube.com/embed/gh3FyLT7WVg" width="300" height="200"></iframe>
            </div>
            
           </div>
           <span><button className="btn btn-danger" onClick={deleteCookie}>Logout</button></span>
          
        </div>
    )
}