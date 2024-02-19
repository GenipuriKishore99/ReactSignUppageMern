import { BrowserRouter } from "react-router-dom";
import { Menu } from "./menu";
import { AppRouter } from "./approuter";

export function Route(){
    return(
        <BrowserRouter>
        <Menu></Menu>
        <AppRouter></AppRouter>
        </BrowserRouter>
    )
}