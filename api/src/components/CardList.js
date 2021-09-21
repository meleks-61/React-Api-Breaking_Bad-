import styled from "styled-components";
import Card from "./Card";


const Container=styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;



const CardList=({cardItems})=>{
    return(
        <Container>
            {cardItems.map((item)=>(
                <Card key={item.char_id} item={item} />


            ))}



        </Container>
    )
}
export default CardList;