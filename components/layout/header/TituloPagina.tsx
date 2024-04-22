import styled from "styled-components";

const TituloH1 = styled.h1`
  color: white;
  backround: green;
  text-align: center;
  margin: 0;
  margin-bottom: 8px;
  border-radius: 8px;
`;

export default function TituloPagina(props: any) {
  return (
    <h1 style={{ textAlign: "center" }}>Documentacion de: {props.titulo}</h1>
  );
}
