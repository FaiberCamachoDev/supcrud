import { getTicketByCode } from "../modules/tickets.js";

const btn=document.getElementById("searchBtn");

btn.addEventListener("click",async()=>{

    const code=document.getElementById("reference").value;

    const ticket=await getTicketByCode(code);

    const result=document.getElementById("result");

    result.innerHTML=`
        <p><b>Status:</b> ${ticket.status}</p>
        <p><b>Creado:</b> ${ticket.createdAt}</p>
    `;

});