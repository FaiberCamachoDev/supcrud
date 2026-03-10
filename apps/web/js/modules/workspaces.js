import { apiRequest } from "../api.js";

export async function getWorkspaces(){

    const data=await apiRequest("/owner/workspaces");

    if(!data){

        return [
            {
                name:"Tienda Online",
                status:"ACTIVE",
                tickets:14
            },
            {
                name:"Soporte SaaS",
                status:"SUSPENDED",
                tickets:6
            }
        ];

    }

    return data;

}