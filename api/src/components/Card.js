import styled from "styled-components";


const Wrapper=styled.div`
position: absolute;
color: black;
background-color:white ;
bottom: 0;
left: 0;
right: 0;
padding: 1rem;
transform: translateY(100%);
transition: transform 0.3s ease-in-out;


/* display: flex;
flex-direction: column; */

`;

const Container=styled.div`
width:30%;
margin:1rem;
text-align:center;
color:white;
position:relative;
overflow: hidden;
&:hover ${Wrapper}{
    
    transform:translateY(0%);
       

}
`;
const Image=styled.img`
width: 100%;
height: 100%;

`;

const Title1=styled.h1``;
const Title2=styled.h3``;
const Desc=styled.p``;



const Card=({item})=>{

    return(
        <Container >
            <Image src={item.img} alt="img"/>
            <Wrapper>
                <Title1>{item.name}</Title1>
                <Title2>{item.nickname}</Title2>
                <Desc>{item.birthday}</Desc>
                <Desc>{item.status}</Desc>


            </Wrapper>

        </Container>


    )
}
export default Card;