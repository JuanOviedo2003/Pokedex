import React from 'react';
import axios from 'axios';
import { IPokemon } from '../../Interface/IPokemon';  // Asegúrate de que la ruta sea correcta
import { defaultPokemon } from '../../Interface/DefaultInterface/DefaultIPokemon';  // Asegúrate de que la ruta sea correcta

export default function PokemonHeightWeight({ pokeName }: any) {
    const [pokemon, setPokemon] = React.useState<IPokemon>(defaultPokemon);

    React.useEffect(() => {
        if (pokeName) {
            const baseURL = `https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`;
            axios.get(baseURL).then((response) => {
                console.log("API Response:", response.data);  // Agregar mensaje de depuración
                setPokemon(response.data);
            }).catch((error) => {
                console.error("Error fetching Pokémon data:", error);
                // Manejo de errores, por ejemplo, si el Pokémon no existe
                setPokemon(defaultPokemon);
            });
        } else {
            setPokemon(defaultPokemon);
        }
    }, [pokeName]);

    React.useEffect(() => {
        console.log("Pokemon State Updated:", pokemon);  // Verifica si el estado del Pokémon se actualiza
    }, [pokemon]);

    return (
        <div className='flex gap-4'>
            <div className='flex flex-col justify-between mt-8 bg-[#032D29] p-4 rounded-xl'>
                <p className='h-6 font-conden text-yellow-400 text-center'>
                    Altura: {pokemon.height}m
                </p>
            </div>
            <div className='flex flex-col justify-between mt-8 bg-[#032D29] p-4 rounded-xl'>
                <p className='h-6 font-conden text-yellow-400 text-center'>
                    Peso: {pokemon.weight}kg
                </p>
            </div>
        </div>
    );
}
