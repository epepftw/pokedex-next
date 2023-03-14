import { useEffect, useState } from "react";
import CardImg from "./CardImg";
import CardInfo from "./CardInfo";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonData {
  sprites: {
    front_default: string;
  };
  weight: number;
  height: number;
  types: {
    type: {
      name: string;
    };
  }[];
}

export default function Card({ pokemon }: { pokemon: Pokemon }) {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  useEffect(() => {
    async function getServerSideProps() {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );

      const data: PokemonData = await res.json();

      setPokemonData(data);
    }

    getServerSideProps();
  }, [pokemon]);

  const type = pokemonData?.types[0].type.name || "";

  // Map Pokemon types to background colors
  const typeToColor: { [key: string]: string } = {
    normal: "bg-gradient-to-br from-gray-300 to-gray-500",
    fire: "bg-gradient-to-br from-red-400 to-yellow-400",
    water: "bg-gradient-to-br from-blue-400 to-teal-400",
    grass: "bg-gradient-to-br from-green-400 to-lime-400",
    flying: "bg-gradient-to-br from-indigo-400 to-purple-400",
    fighting: "bg-gradient-to-br from-yellow-400 to-red-400",
    poison: "bg-gradient-to-br from-purple-400 to-pink-400",
    electric: "bg-gradient-to-br from-yellow-400 to-orange-400",
    ground: "bg-gradient-to-br from-yellow-600 to-orange-500",
    rock: "bg-gradient-to-br from-yellow-500 to-orange-500",
    psychic: "bg-gradient-to-br from-pink-400 to-purple-400",
    ice: "bg-gradient-to-br from-blue-200 to-blue-300",
    bug: "bg-gradient-to-br from-green-600 to-lime-500",
    ghost: "bg-gradient-to-br from-purple-500 to-pink-500",
    steel: "bg-gradient-to-br from-gray-500 to-blue-gray-500",
    dragon: "bg-gradient-to-br from-purple-600 to-red-600",
    dark: "bg-gradient-to-br from-gray-700 to-blue-gray-700",
    fairy: "bg-gradient-to-br from-pink-300 to-purple-300",
  };

  return (
    <div
      className={`px-2 py-5 w-[300px] relative overflow-hidden text-center m-2 rounded-md ${
        typeToColor[type] || "bg-gray-400"
      } text-white`}
    >
      <img
        className="absolute w-[300px] z-0 top-[50px] left-[150px] opacity-70"
        src="logo.png"
        alt=""
      />
      <h2 className="text-lg font-bold z-100">{pokemon?.name.toUpperCase()}</h2>
      {pokemonData && (
        <div className="flex justify-center text-start z-20">
          <CardInfo pokemonData={pokemonData} />
          <CardImg pokemonData={pokemonData} pokemon={pokemon} />
        </div>
      )}
    </div>
  );
}
