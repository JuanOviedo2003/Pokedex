import { useState } from 'react';
import PokemonImg from './PokemonImg/PokemonImg';
import PokemonStats from './PokemonStats/PokemonStats';
import PokemonHeight from './PokemonHeight&Weight/PokemonHeightWeight';
import PokemonHeightWeight from './PokemonHeight&Weight/PokemonHeightWeight';

export default function App() {

  const [pokeName, setPokeName] = useState('');

  const handleInputChange = (e: any) => {
    setPokeName(e.target.value);
  };

  const controlEspacio = (e: any) => {
    if (e.key === ' ') {
      e.preventDefault();
      alert('No se puede usar espacio');
    }
  };

  return (
    <>
      <div className="h-[600px] w-[420px] flex flex-col items-center justify-start bg-red-600 border-red-800 border-8 border-r-[20px] rounded-xl outline outline-black outline-2">
        <input
          className="outline-none px-2 py-1 w-72 mt-8 border-red-800 border-solid border-4 bg-white rounded-xl"
          type="text"
          id='pokeName'
          value={pokeName}
          onChange={handleInputChange}
          onKeyDown={controlEspacio}
          placeholder='Ingresa el nombre de un pokemon'
          required
        />
        <PokemonImg pokeName={pokeName}></PokemonImg>
      </div>
      <div className="h-[600px] w-[420px] flex flex-col items-center justify-start bg-red-600 border-red-800 border-8 border-l-[20px] rounded-xl outline outline-black outline-2">
        <PokemonStats pokeName={pokeName}></PokemonStats>
        <PokemonHeightWeight pokeName={pokeName}></PokemonHeightWeight>
      </div>

      {/**División*/}
      <div className="absolute h-[620px] bg-red-800 w-[35px] rounded-xl outline outline-black outline-2">
      </div>
    </>
  )
}