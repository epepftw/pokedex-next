interface CardImgProps {
  pokemonData: {
    sprites: {
      front_default: string;
    };
  };
  pokemon: {
    name: string;
  };
}

function CardImg({ pokemonData, pokemon }: CardImgProps) {
  return (
    <div className="z-20">
      <img
        className="h-[96px] w-[96px]"
        src={pokemonData.sprites.front_default}
        alt={pokemon.name}
      />
    </div>
  );
}

export default CardImg;
