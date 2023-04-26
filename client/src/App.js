
// import './App.css';
// import axios from 'axios';

// import React,{useState, useEffect} from 'react';

// function App() {
//   // create state to store the data
//   const [pokemon, setPokemon]= useState([])
//   useEffect(()=>{
//     axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
//       // .then(response => response)
//       .then(response => console.log(response))
//       .then(response =>setPokemon(response.data.results))
//       .catch(err => console.log(err))

//     // [] array of all variable we want to keep track of it
//   },[]);
  
//   return (
//     //display all 
//     <div style={{textAlign : "center"}}  >
//         <h1 style={{color :"red"}} >Fetch Pokemon</h1>
//       <div>
//     {
//       pokemon.map((names,i)=>(<h4 key={i} >
//           {names.name}
//           </h4>)
//       )
//     }
//     </div>
//     </div>
//   )
// }

// export default App;
import './App.css';
import React,{useState, useEffect} from 'react';

function App() {
  const [pokemon, setPokemon]= useState([])
  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => response.json())
      .then(resJson => {
        console.log(resJson) 
        setPokemon(resJson.results)})
        
      // .then(res3 => setPokemon(res3.results))
      .catch(err => console.log(err))

    // array of all variable we want to keep track of 
},[]);
  
  return (
    //display all 
    <div style={{textAlign : "center"}}  >
        <h1 >All Name</h1>
      <ul>
    {
      pokemon.map((names,i)=>{
        return(<li key={i} style={{listStyle: "none"}}>
          
          {names.name}
          </li>)
      })
    }
    </ul>
    </div>
  )
}

export default App;
