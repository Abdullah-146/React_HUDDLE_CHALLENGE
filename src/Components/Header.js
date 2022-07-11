import React, { useState } from "react";
import { StyledHeader } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Nav } from "./styles/Header.styled";
import { Logo, Image } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

export default function Header() {
  const [state, setstate] = useState(0);
  const [string, setstring] = useState("./images/logo.svg");
  if (state == 0) {
    return (
      <StyledHeader fn={setstring}>
        <Container>
          <Nav>
            <Logo src={string} alt="" />
            <Button> try it free</Button>
          </Nav>
          <Flex>
            <div>
              <h1>Build The Community Your Fans Would Love</h1>
              <p>
                Huddle re-imagines the way we build communities.You haveavoice,
                but so does your audience.Create connections with your users as
                you engage in genuine discussion.
              </p>

              <Button bg="#ff0099" color="#fff">
                Get started for free
              </Button>
            </div>
            <Image src="./images/illustration-mockups.svg" alt="" />
          </Flex>
        </Container>
      </StyledHeader>
    );
  }
}
