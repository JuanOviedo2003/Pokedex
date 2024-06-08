export interface IPokemon {
    height: number;
    weight: number;
    sprites: {
        front_default: string;
    };
    stats: Array<[
        {
            base_stat: number,
            stat: {
                name: string,
            }
        },
        {
            base_stat: number,
            stat: {
                name: string,
            }
        },
        {
            base_stat: number,
            stat: {
                name: string,
            }
        },
        {
            base_stat: number,
            stat: {
                name: string,
            }
        },
        {
            base_stat: number,
            stat: {
                name: string,
            }
        },
        {
            base_stat: number,
            stat: {
                name: string,
            }
        }
    ]>,
    types: Array<[
        {
            type: {
                name: string,
                url: string,
            }
        }
    ]>
}
