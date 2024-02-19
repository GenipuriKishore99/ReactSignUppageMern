import axios from 'axios';

export function saveData(url,data){
    return axios.post(url,data)
}

export function getData(url1){
    return axios.get(url1)
}

export function updateData(url,data){
    return axios.put(url,data)
}

export function deleteData(url){
    return axios.delete(url);
}