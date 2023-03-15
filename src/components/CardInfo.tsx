const typeToEmoji: { [key: string]: string } = {
  normal: "🌀",
  fire: "🔥",
  water: "💧",
  grass: "🍃",
  flying: "🦅",
  fighting: "👊🏾",
  poison: "☠",
  electric: "⚡",
  ground: "🌋",
  rock: "🧱",
  psychic: "🔮",
  ice: "❄",
  bug: "🦗",
  ghost: "👻",
  steel: "🕋",
  dragon: "🐲",
  dark: "🌑",
  fairy: "🧚🏻‍♀️",
};

interface PokemonData {
  weight: number;
  height: number;
  types: {
    type: {
      name: string;
    };
  }[];
}

function CardInfo({ pokemonData }: { pokemonData: PokemonData }) {
  return (
    <div className="z-20">
      <p>Weight: {pokemonData.weight}</p>
      <p>Height: {pokemonData.height}</p>
      <p>Types:</p>
      <ul>
        {pokemonData.types.map((type) => (
          <li className="font-semibold" key={type.type.name}>
            {typeToEmoji[type.type.name]}{" "}
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CardInfo;
