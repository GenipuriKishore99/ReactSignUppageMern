import { Link } from "react-router-dom"

export const InvalidCre=()=>{
    return(
        <div>
            <h4 className="text-danger">Invalid Credentials -Try Again</h4>
            <Link to="/signin">Try-Again</Link>
        </div>
    )
}