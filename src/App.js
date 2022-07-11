import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import { Container } from "./Components/styles/Container.styled";
import GlobalStyles from "./Components/styles/Global";
import content from "./content";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

import styled from "styled-components";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  const [state, setstate] = React.useState(0);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((obj, index) => (
            <Card key={index} obj={obj} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
