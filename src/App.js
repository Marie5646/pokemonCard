import "./styles.css";

import Greeter from "./Greeter";
import Dog from "./Dog";
import LoginForm from "./LoginForm";
import Die from "./Die";
import DiceRolls from "./DiceRolls";
import RandomPokemon from "./RandomPokemon";

export default function App() {
  return (
    <div className="App">
      <RandomPokemon />
      <RandomPokemon />
      <RandomPokemon />
    </div>
  );
}
