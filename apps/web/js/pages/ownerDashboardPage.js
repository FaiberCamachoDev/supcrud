import { getWorkspaces } from "../modules/workspaces.js";

async function load(){

    const ws=await getWorkspaces();

    const total=ws.length;

    const tickets=ws.reduce((a,b)=>a+b.tickets,0);

    document.getElementById("totalWorkspaces").innerText=total;

    document.getElementById("totalTickets").innerText=tickets;

    document.getElementById("openTickets").innerText=tickets;

}

load();