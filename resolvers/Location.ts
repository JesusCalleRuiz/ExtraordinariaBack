import { CharacterAPI, LocationApi } from "../types.ts";

export const Location = {
    residents: async ( parent: LocationApi): Promise<Array<CharacterAPI>>=>{
        const residents = await Promise.all(parent.residents.map(async(resident)=>{
        const resid = await fetch(resident);
        return resid.json();
    }
    ))
    return residents;
    }
}