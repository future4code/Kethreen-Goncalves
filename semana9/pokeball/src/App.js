import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard";
import styled from "styled-components";
import pokeGif from "./components/Pokebolas-17369.gif";

const App = () => {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  // método que roda após a montagem do componente
  useEffect(() => {
    // função axios que está batendo na API e buscando 151 pokemons
    const getPokemon = () => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
        .then((response) => setPokeList(response.data.results))
        // função que está setando no estado os 151 pokemons
        .catch((err) => console.log(err));
    };
    getPokemon();
  }, [setPokeList]);

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  const closePokeball = () => {
    setPokeName("");
  };

  return (
    <AppPoke className="App">
      <h3>Pokebola</h3>
      {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
      <select onChange={changePokeName}>
        <option value={""}>Escolha um pokemon</option>
        {/* renderizando a lista de pokemons como opções do select */}
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>

      {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
      {!pokeName && <img src={pokeGif} alt="gif-pokemon" />}
      {pokeName && <PokeCard pokemon={pokeName} />}
      <button onClick={closePokeball}>Fechar Pokebola</button>
    </AppPoke>
  );
};

export default App;

const AppPoke = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vh;

  select {
    width: 220px;
    font-size: 1.2rem;
  }

  button {
    background-color: black;
    color: white;
    border-radius: 20px;
    font-size: 15px;
    padding: 1vh;
  }
`;
