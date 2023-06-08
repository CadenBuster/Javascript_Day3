const pokeform = document.querySelectorAll('form')[0]
pokeform.addEventListener('submit', (event) => {
    event.preventDefault()
    const pokename = pokeform[0].value
    pokemonData(pokename)
})

const pokemon = document.querySelector('.pokemon')

const pokemonData = async (pokename) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
    const data = await response.json()
    pokemon.innerHTML = `

    <div class="pokecard">
        <div class="poketitle">
            <p>${data.name}</p>
            <p style="font-size:small">XP: ${data.base_experience}</p>
        </div>
        <img src='${data.sprites.front_default}'>
        <p>Ability: ${data.abilities[0].ability.name}</p>
    </div>
    `
}