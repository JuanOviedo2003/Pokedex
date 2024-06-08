import { IPokemon } from "../IPokemon";

export const defaultPokemon: IPokemon = {
    height: 3,
    weight: 40,
    sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" // URL de una imagen por defecto
    },
    stats: [
        {
            base_stat: 48,
            stat: {
                name: "hp",
            }
        },
        {
            base_stat: 48,
            stat: {
                name: "attack",
            }
        },
        {
            base_stat: 48,
            stat: {
                name: "defense",
            }
        },
        {
            base_stat: 48,
            stat: {
                name: "special-attack",
            }
        },
        {
            base_stat: 48,
            stat: {
                name: "special-defense",
            }
        },
        {
            base_stat: 48,
            stat: {
                name: "speed",
            }
        }
    ],
    types: [
        {
            type: {
                name: "normal",
                url: "https://pokeapi.co/api/v2/type/1/",
            }
        }
    ]
};