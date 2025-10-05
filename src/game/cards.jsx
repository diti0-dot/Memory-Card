import { useState } from "react"
import { useEffect } from "react";
import axios from 'axios';

export default function Cards(){
 const [pokemon, setPokemon] = useState([]);
  const [clicked, setClicked] = useState([]); 
  const [score, setScore] = useState(0);

  const fetchPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then(response => setPokemon(response.data.results))
      .catch(err => console.error("Failed to fetch:", err));
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

    const pokemonId = (url) =>{
        const parts = url.split("/").filter(Boolean)
        return parts[parts.length-1];
  }
  const shuffleArray = (array) => {
  return array
    .map((a) => [Math.random(), a]) 
    .sort((a, b) => a[0] - b[0])     
    .map((a) => a[1]);               
};

  const handleClicks = (id) =>{
    if (clicked.includes(id)){
        alert("Loser! you fr have goldfish memory")
        setClicked([]);
        setScore(0);
    }else{
        setClicked([...clicked, id]);
        setScore(score+1);

    }
      setPokemon(shuffleArray(pokemon));
  }
    return(
        <>
        <div>
            <h2>Score: {score}</h2>
            <div className="cards-container">
                 {pokemon.map((p) => {
                const id = pokemonId(p.url);
                const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
                return (
                <div
                    className="card"
                    key={id}
                    onClick={() => handleClicks(id)}
                    style={{ cursor: "pointer" }}
                    >
                    <img src={imgUrl} alt={p.name} />
                    <h2>{p.name}</h2>
                </div>
      );
    })}
            </div>
        </div>

        </>
    )
}