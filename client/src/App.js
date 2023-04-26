
import './App.css';
import axios from 'axios';

import React,{useState, useEffect} from 'react';

function App() {
  // create state to store the data
  const [pokemon, setPokemon]= useState([])
  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => response.json)
      // .then(response => console.log(response)
      .then(response =>setPokemon(response.data.results))
      .catch(err => console.log(err))

    // [] array of all variable we want to keep track of it
  },[]);
  
  return (
    //display all 
    <div style={{textAlign : "center"}}  >
        <h1 style={{color :"red"}} >Fetch Pokemon</h1>
      <div>
    {
      pokemon.map((names,i)=>(<h4 key={i} >
          {names.name}
          </h4>)
      )
    }
    </div>
    </div>
  )
}

export default App;
