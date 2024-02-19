import { saveData,getData } from "./context-service";

const url="http://127.0.0.1:5000/customerregister/";

const url1="http://127.0.0.1:5000/user/"

export function saveUserInfo(data){
    return saveData(url,data)
}

export function getUserInfo(){
    return getData(url1)
}