const fetchPokemon = (pokemonName) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      renderCard(data);
    })
    .catch((err) => console.error(err));
};
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const searchTerm = document.getElementById("input").value.toLowerCase();
  fetchPokemon(searchTerm);
});
fetchPokemon("ditto");

const container = document.querySelector(".container");

const renderCard = (pokemon) => {
  container.innerHTML = ""; // Clear previous content

  const card = document.createElement("div");
  card.classList.add("pokemon-Element");

  const name = document.createElement("h2");
  name.textContent = pokemon.name;

  const image = document.createElement("img");
  image.src = pokemon.sprites.front_default;
  image.alt = `${pokemon.name} image`;

  const abilities = document.createElement("ul");
  abilities.innerHTML = "<h3>Abilities:</h3>";
  pokemon.abilities.forEach((ability) => {
    const abilityItem = document.createElement("li");
    abilityItem.textContent = ability.ability.name;
    abilities.appendChild(abilityItem);
  });

  const stats = document.createElement("ul");
  stats.innerHTML = "<h3>Stats:</h3>";
  pokemon.stats.forEach((stat) => {
    const statItem = document.createElement("li");
    statItem.textContent = `${stat.stat.name}: ${stat.base_stat}`;
    stats.appendChild(statItem);
  });

  card.appendChild(name);
  card.appendChild(image);
  card.appendChild(stats);
  card.appendChild(abilities);

  container.appendChild(card);
};
