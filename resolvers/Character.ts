import { CharacterAPI, EpisodeApi, LocationApi } from "../types.ts";

export const Character = {
    origin: async (parent: CharacterAPI): Promise<LocationApi | null> =>{
        if (parent.origin){
            const origin = await fetch(parent.origin.url);
            return origin.json()
        }else{
            return null;
        }
    },
    location: async (parent:CharacterAPI): Promise<LocationApi> => {
        const location = await fetch(parent.location.url);
        return location.json();
    },
    episode: async(parent:CharacterAPI):Promise<Array<EpisodeApi>> => {
        const episodes = await Promise.all(
            parent.episode.map(async (episode) =>{
                const epis=await fetch(episode);
                return epis.json();
            })
        )
        return episodes;
    } 
}