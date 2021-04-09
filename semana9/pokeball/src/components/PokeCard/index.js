import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const PokeCard = (props) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, [props.pokemon]);

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <CardPoke>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}

      {pokemon.sprites && (
        <ImagePokemon src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </CardPoke>
  );
};

export default PokeCard;

const CardPoke = styled.div`
  background-color: #313131;
  color: white;
  font-weight: 700;
  width: 240px;
  height: 300px;
  border-radius: 20px;
  align-items: center;
  display: grid;
  grid-template-rows: 1fr 1fr 8fr;
  grid-template-columns: 1fr 1fr;
  box-shadow: 5px 5px 12px #313131;

  p:first-child {
    background-color: red;
    grid-column: 1 / 3;
    border-radius: 20px;
    justify-self: center;
    width: 60%;
    padding: 0.2vw;
    box-shadow: 1px 1px 5px white;
  }
  p {
    background-color: black;
    padding: 0.2vw;
    width: 70%;
    margin: 2vh;
    border-radius: 20px;
    box-shadow: 1px 1px 5px white;
  }
`;

const ImagePokemon = styled.img`
  width: 80%;
  grid-column: 1 / 3;
  justify-self: center;
`;
