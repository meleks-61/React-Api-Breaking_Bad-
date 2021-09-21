import styled from "styled-components"


const Container=styled.div`
display:flex;
justify-content:center;`;
const Image=styled.img``;

const Header=()=>{
    return(
        <Container>
            <Image src="https://www.logolynx.com/images/logolynx/55/55a537ca9549600cf7d1d0b274b3bc61.png"
            alt="Breaking Bad Logo"/>
        </Container>
    )
}
export default Header;