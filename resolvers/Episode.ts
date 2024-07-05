import { CharacterAPI, EpisodeApi } from "../types.ts";

export const Episode = {
    characters: async ( parent: EpisodeApi): Promise<Array<CharacterAPI>> => {
        const characters = await Promise.all(
            parent.characters.map(async(character) => {
                const char = await fetch(character);
                return char.json();
            })
        )
        return characters;
    }
}