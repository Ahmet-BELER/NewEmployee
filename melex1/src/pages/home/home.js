import React from "react";
import styled from "styled-components";

const Main = styled.div`
  background: #155e60 0% 0% no-repeat padding-box;
  opacity: 1;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: flex-end; */
  padding: 23px 3.6% 26px 2%;

  background: #ffffff no-repeat padding-box;
  opacity: 1;
`;
const Logo = styled.div``;
const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: 60%;
`;

const navbar = [
  { name: "REPORTING", link: "/" },
  { name: "VERTRIEBSKANÄLE", link: "/" },
  { name: "KBESTELLUNGEN", link: "/" },
  { name: "KUNDEN", link: "/" },
  { name: "KONTO", link: "/" },
  { name: "PRODUKTE", link: "/" },
  { name: "LAGERBESTAND", link: "/" },
];

const Profileicon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-size: 20px;
  color: #000;
`;

const Section = styled.div`
  display: grid;
  background: #155e60 0% 0% no-repeat padding-box;
  width: 100%;
`;

const Header = styled.div`
  color: #ffffff;
  width: 70%;
  margin: 52px auto 0;
  text-align: center;
`;

const Cards = styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap;
flex-direction:row;
  border: 1px solid red;
  width: 70%;
  margin: 60px auto 0;
  @media (max-width: 600px) {
    background: red;
  }
`;

const Card = styled.div`
  background: #66b1b3 0% 0% no-repeat padding-box;
  width: 160px;
  height: 120px;
  display: flex;
  flex-direction:column;
  justif-content: center;
  align-items: center;

`;
const Headline = styled.div`
  font-size: 24px;
`;

const Contentline = styled.div`
  font-size: 16px;
`;

const cardsContent = [
  { name: "reporting", logo: "/images/logo.png" ,margin:"0 22px 22px 0" },
  { name: "kunden", logo: "/images/logo.png" ,margin:"0 22px 22px" },
  { name: "reporting", logo: "/images/logo.png" ,margin:"0 22px 22px" },
  { name: "kunden", logo: "/images/logo.png" ,margin:"0 0 0 22px" },
  { name: "reporting", logo: "/images/logo.png" ,margin:"22px 22px 0 0" },
  { name: "reporting", logo: "/images/logo.png" ,margin:"22px 22px 0 0" },

];

export default function Home() {
  return (
    <Main>
      <Menu>
        <Logo>
          <img
            style={{
              width: "254px ",
              height: "169px",
            }}
            src={"/images/logo.png"}
          />
        </Logo>
        <Navbar>
          {navbar.map((item, index) => (
            <a
              style={{ color: "black", textDecoration: "none" }}
              href={item.link}
              key={index}
            >
              {item.name}
            </a>
          ))}
        </Navbar>
        <Profileicon>
          <img
            src={"/images/profile.png"}
            style={{ width: "36px", height: "36px " }}
          />
          <span style={{ marginTop: "8px" }}> PROFILE</span>
        </Profileicon>
      </Menu>

      <Section>
        <Header>
          <Headline>HERZLICH WILLKOMMEN im Partnerportal von plusWINE</Headline>
          <Contentline>
            Hier findet Ihr alle Informationen rund um Abrechnung,
            Vertriebskanäle, Lagerbestände und vieles mehr!
          </Contentline>

          <Contentline>
            {" "}
            Solltet Ihr Fragen oder Anregungen zum Portal haben, steht euch
            unser Team jederzeit gerne unter reporting@pluswine.de zur
            Verfügung.
          </Contentline>
        </Header>

        <Cards>
          {cardsContent.map((item, index) => (
            <Card key={index} style={{margin:item.margin}}>
              <div>logo</div>
              <div>{item.name}</div>
            </Card>
          ))}
        </Cards>
      </Section>
    </Main>
  );
}
