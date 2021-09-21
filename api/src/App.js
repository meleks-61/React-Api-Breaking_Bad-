import data from "./components/data.json"
import styled from "styled-components"
import Header from "./components/Header";
import CardList from "./components/CardList";
import {useState} from "react";


const Container=styled.div`
background:linear-gradient(to right,black,green,black);

`;

function App() {
  const[cardItems, setCardItems]=useState(data)
  
  return (
    <Container>
      <Header/>
      <CardList cardItems={cardItems} />


    </Container>
  );
}

export default App;
