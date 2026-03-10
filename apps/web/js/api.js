import { CONFIG } from "./config.js";

export async function apiRequest(endpoint, method="GET", body=null){

    const options={
        method,
        headers:{
            "Content-Type":"application/json"
        }
    };

    const token=localStorage.getItem("token");

    if(token){
        options.headers["Authorization"]=`Bearer ${token}`;
    }

    if(body){
        options.body=JSON.stringify(body);
    }

    try{

        const response=await fetch(
            CONFIG.API_BASE_URL+endpoint,
            options
        );

        if(!response.ok){
            throw new Error("API error");
        }

        return await response.json();

    }catch(err){

        console.warn("API no disponible");

        return null;

    }

}