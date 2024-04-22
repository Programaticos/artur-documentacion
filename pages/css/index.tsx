import BarraNavegacion from "@/components/layout/header/BarraNavegacion";

import TituloPagina from "@/components/layout/header/TituloPagina";
import MainContainer from "@/components/layout/main/mainContainer";
import styled from "styled-components";

const MainStyles = styled.main`
  display: flex;
`;

export default function CssPage() {
  return (
    <>
      <header>
        <TituloPagina titulo="CSS" />
        <BarraNavegacion />
      </header>
      <MainStyles>
        <MainContainer />
      </MainStyles>
      <footer></footer>
    </>
  );
}
