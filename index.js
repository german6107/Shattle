const baseURL = 'http://pokeapi.co/api/v2/pokemon';

//  первое упражнение
const getPokemons = async() => {
    const response = await fetch(baseURL);
    const result = await response.json();

    console.log(result);
}

// getPokemons()


// второе упражнение(лобим бульбазавра)
const namePokemon = fetch(`${baseURL}/1`).then(item => item.json())

const getNamePokemon = async() => {
        try {
            const response = await Promise.allSettled([namePokemon]);

            const filterResponses = response.reduce((accumulator, { status, value }) => {
                if (status === 'fulfilled') {
                    accumulator.push(value);
                }
                return accumulator;
            }, [])
            console.log(filterResponses);
        } catch (err) {
            console.error('err', error.message, )
        }
    }
    // getNamePokemon()

// третье упражнение

const dataPokemon = fetch(`${baseURL}-form/1`).then(item => item.json())

const getDataPokemon = async() => {

        const response = await Promise.allSettled([dataPokemon]);

        const filterResponses = response.reduce((accumulator, { status, value }) => {
            if (status === 'fulfilled') {
                accumulator.push(value);
            }
            return accumulator;
        }, [])
        console.log(filterResponses);
    }
    // getDataPokemon()