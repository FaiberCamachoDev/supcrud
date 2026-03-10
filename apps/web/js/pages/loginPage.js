import { login } from "../modules/auth.js";

const btn=document.getElementById("loginBtn");

btn.addEventListener("click",async()=>{

    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;

    const res=await login(email,password);

    if(res){
        window.location.href="workspace/dashboard.html";
    }

});