import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Label from '../Label/Label';
import Stat from '../Stat/Stat';
import { IPokemon } from '../../Interface/IPokemon';
import { defaultPokemon } from '../../Interface/DefaultInterface/DefaultIPokemon';

export default function PokemonStats({ pokeName }: any) {
    const [pokemon, setPokemon] = useState<IPokemon>(defaultPokemon);
    const [weakness, setWeakness] = useState<string>('');

    useEffect(() => {
        const fetchPokemonData = async () => {
            if (pokeName) {
                try {
                    const baseURL = `https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`;
                    const response = await axios.get(baseURL);
                    const pokemonData = response.data;

                    setPokemon(pokemonData);

                    const typeUrl = pokemonData.types[0]?.type.url;
                    if (typeUrl) {
                        const typeResponse = await axios.get(typeUrl);
                        const typeData = typeResponse.data;

                        const firstWeakness = typeData.damage_relations.double_damage_from[0]?.name || 'fighting';
                        setWeakness(firstWeakness);
                    } else {
                        setWeakness('fighting');
                    }
                } catch (error) {
                    console.error('Error fetching Pokemon data:', error);
                    setPokemon(defaultPokemon);
                    setWeakness('fighting');
                }
            } else {
                setPokemon(defaultPokemon);
                setWeakness('fighting');
            }
        };

        fetchPokemonData();
    }, [pokeName]);

    const getColorByTypeOrWeakness = (type: any) => {
        switch (type) {
            case 'steel':
                return '#60A1B8';
            case 'water':
                return '#2980EF';
            case 'bug':
                return '#91A119';
            case 'dragon':
                return '#5061E1';
            case 'electric':
                return '#FAC000';
            case 'ghost':
                return '##704170';
            case 'fire':
                return '#E62829';
            case 'fairy':
                return '#EF71EF';
            case 'ice':
                return '#3FD8FF';
            case 'fighting':
                return '#FF8000';
            case 'grass':
                return '#3FA129';
            case 'psychic':
                return '#EF4179';
            case 'rock':
                return '#AFA981';
            case 'dark':
                return '#50413F';
            case 'ground':
                return '#915121';
            case 'poison':
                return '#8F41CB';
            case 'flying':
                return '#81B9EF';
            default:
                return 'gray'; // Color por defecto
        }
    };

    const pokemonTypes = pokemon.types.map((typeObj) => typeObj.type.name);
    
    return (
        <div className='flex flex-col justify-between mt-8 bg-[#032D29] w-[95%] p-4 rounded-xl h-[220px]'>
            <div>
                <div className='flex mb-2'>
                    <p className='text-yellow-400 mr-4 font-conden'>TIPO:</p>
                    {pokemonTypes.map((type, index) => (
                        <Label key={index} color={`${getColorByTypeOrWeakness(type)}`} text={type}></Label>
                    ))}
                </div>
                <div className='flex'>
                    <p className='text-yellow-400 mr-4 font-conden'>DEBILIDAD:</p>
                    <Label color={`${getColorByTypeOrWeakness(weakness)}`} text={weakness}></Label>
                </div>
            </div>
            <div className='flex justify-between items-end'>
                {/* hp */}
                <Stat nameStat={`${pokemon.stats[0].stat.name}`} pointsStat={`${((pokemon.stats[0].base_stat) / 10)}`}></Stat>
                {/* attack */}
                <Stat nameStat='ATK' pointsStat={`${((pokemon.stats[1].base_stat) / 10)}`}></Stat>
                {/* defense */}
                <Stat nameStat='DEF' pointsStat={`${((pokemon.stats[2].base_stat) / 10)}`}></Stat>
                {/* special attack */}
                <Stat nameStat='SP.ATK' pointsStat={`${((pokemon.stats[3].base_stat) / 10)}`}></Stat>
                {/* special defense */}
                <Stat nameStat='SP.DEF' pointsStat={`${((pokemon.stats[4].base_stat) / 10)}`}></Stat>
                {/* speed */}
                <Stat nameStat='SPEED' pointsStat={`${((pokemon.stats[5].base_stat) / 10)}`}></Stat>
            </div>
        </div>
    );
}
