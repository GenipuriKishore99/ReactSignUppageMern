import { useEffect, useState } from "react"
import { getUserInfo } from "../../../services/userregister.service";

export const RegistartionUserView=()=>{

    const [userInfo,setUserInfo]=useState([]);
    const header=["UserId","FullName","Email","UserName","Password","RePassword"]

    useEffect(()=>{
        userDetails();

    },[])
    function userDetails(){
        getUserInfo().then((res)=>{
            setUserInfo(res.data)
        })
    }
    return(
        <table className="table table-hover table-bordered table-striped">
            <thead className="table-primary">
                <tr>
                    {
                        header.map((h)=>{
                            return(
                                <th>
                                    {h}
                                </th>
                            )
                        })
                    }
                </tr>
                
            </thead>
            <tbody>
                {
                   userInfo.map((item)=>{
                    return(
                        <tr>
                            {
                                Object.values(item).map((d)=>{
                                    return(
                                        <td>{d}</td>
                                    )
                                })
                            }
                        </tr>
                    )
                   })
                }
            </tbody>
        </table>
    )
}