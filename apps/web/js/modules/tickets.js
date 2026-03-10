import { apiRequest } from "../api.js";

export async function getTickets(){

    const data=await apiRequest("/tickets");

    if(!data){

        return [
            {
                referenceCode:"SC-1001",
                subject:"Problema pedido",
                status:"OPEN",
                agent:"-"
            },
            {
                referenceCode:"SC-1002",
                subject:"Consulta factura",
                status:"IN_PROGRESS",
                agent:"Maria"
            }
        ];

    }

    return data;

}

export async function getTicketByCode(code){

    const data=await apiRequest(`/public/ticket/${code}`);

    if(!data){

        return {
            status:"OPEN",
            createdAt:"2024-01-01"
        };

    }

    return data;

}