// import data from "./components/data.json"
import styled from "styled-components"
import Header from "./components/Header";
import CardList from "./components/CardList";
import {useState,useEffect} from "react";
import axios from "axios";



const Container=styled.div`
background:linear-gradient(to right,black,green,black);
;
/* m */

`;

function App() {
  const[cardItems, setCardItems]=useState([])
  useEffect(()=>{
    axios.get("https://breakingbadapi.com/api/characters")
    .then((res)=>setCardItems(res.data));
    
    // fetch("https://breakingbadapi.com/api/characters")
    // .then((response)=>response.json())
    // .then(data=>setCardItems(data))
    
    

 

  },[])


  
  return (
    <Container>
      <Header/>
      <CardList cardItems={cardItems} />


    </Container>

  );
}

export default App;
