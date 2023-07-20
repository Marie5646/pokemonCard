import "./RandomPokemon.css";

export default function RandomPokemon() {
  const roll = Math.floor(Math.random() * 151);
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${roll}.png`;
  return (
    <div className="pokeCard">
      <h1>Pokemon #{roll}</h1>
      <img className="img" src={url} alt="poke" />
    </div>
  );
}
