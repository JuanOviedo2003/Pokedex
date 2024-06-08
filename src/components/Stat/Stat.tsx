import React from 'react'

type Stat = {
    nameStat: string;
    pointsStat: number;
}

export default function Characteristics({ nameStat, pointsStat }: Stat) {

    //Creación de un Array de 10 elementos
    const divs = new Array(10).fill(0);

    return (
        <div className='w-12 flex flex-col items-center'>
            <div className='flex flex-col-reverse gap-[3px]'>
                {divs.map((_, index) => {
                    // Determinar el color del fondo basado en pointsStat
                    const backgroundColor = index < pointsStat ? 'blue' : 'white';

                    // Retornar un div con estilos específicos
                    return (
                        <div
                            key={index}
                            style={{
                                width: '32px',
                                height: '5px',
                                backgroundColor: backgroundColor,
                            }}
                        />
                    );
                })}
            </div>
            <p className='text-yellow-400 font-conden text-center'>{nameStat.toUpperCase()}</p>
        </div>
    )
}