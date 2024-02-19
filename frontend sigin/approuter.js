import {Route, Routes } from "react-router-dom"
import { UserRegistration } from "./components/registrationUsers/registrationUser/user-registration.component"
import { Home } from "./home"
import { SignIn } from "./components/login/signin/signin.component"
import { InvalidCre } from "./components/tutorilas/invalidCre.component"
export const AppRouter=()=>{
    return(
        <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/userregistration" element={<UserRegistration></UserRegistration>}></Route>
            <Route path="/signin" element={<SignIn></SignIn>}></Route>
            <Route path="/invalid" element={<InvalidCre></InvalidCre>}></Route>
            
        </Routes>
    )
}