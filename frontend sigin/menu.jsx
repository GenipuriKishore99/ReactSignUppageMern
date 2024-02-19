import { Link } from "react-router-dom"

export  const Menu=()=>{
    return(
        <div className="container-fluid">
            <header className="d-flex justify-content-between  bg-dark p-2">
                <div>
                    <h2 className="text-white">MyFacebook</h2>
                </div>
                <div>
               <span className="me-3"> <Link to="/home">Home</Link></span>
                <span className="me-3"><Link className="">About</Link></span>
               <span className="me-3"><Link>Courses</Link></span> 
                <span className="me-3"><Link>Contact Us</Link></span>
                </div>
                <div>
                <span className="bi bi-search text-white me-3"></span>
                <span className="bi bi-person text-white me-3"></span>
                <span className="me-3"><Link className="a" to="/userregistration">SignUp</Link></span>
                <span className="me-3"><Link className="btn btn-link" to="/signin">SignIn</Link></span>
                </div>
               
            </header>

        </div>
    )
}