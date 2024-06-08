import React from 'react';
import './PokemonImg.css';
import axios from 'axios';
import { IPokemon } from '../../Interface/IPokemon';  // Asegúrate de que la ruta sea correcta

// Objeto predeterminado para el estado inicial
import { defaultPokemon } from '../../Interface/DefaultInterface/DefaultIPokemon';

export default function PokemonImg({ pokeName }: any) {
    const [pokemon, setPokemon] = React.useState<IPokemon>(defaultPokemon);

    React.useEffect(() => {
        if (pokeName) {
            const baseURL = `https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`;
            axios.get(baseURL).then((response) => {
                setPokemon(response.data);
            }).catch(() => {
                // Manejo de errores, por ejemplo, si el Pokémon no existe
                setPokemon(defaultPokemon);
            });
        } else {
            setPokemon(defaultPokemon);
        }
    }, [pokeName]);

    return (
        <div className="custom-shape bg-[#DEDEDE] w-72 h-50 mt-8 flex items-center justify-center border-solid border-2 border-black rounded-xl">
            <div className="custom-shape bg-[#F1F2D3] w-[80%] h-[70%] shadow-[inset_-10px_15px_40px_0px_black] border-solid border-2 border-black rounded-xl">
                <img className='w-full' src={pokemon.sprites.front_default} alt={pokeName || 'default'} />
            </div>
        </div>
    );
}
