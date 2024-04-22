import styled from "styled-components";

/* Стилизация блока <nav> */
const Algo2 = styled.nav`
  background-color: #f8f8f8;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export default function BlockStyleFunction() {
  return (
    <Algo2>
      <a href="#">Documentation</a>
      <a href="#">Showcase</a>
      <a href="#">Ecosystem</a>
      <a href="#">Releases</a>
    </Algo2>
  );
}

/* Стилизация ссылок внутри блока <nav> */
const AStyle = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  margin-right: 10px;
`;

/* При наведении на ссылку */
const HoverStyle = styled.div`
  a: hover;
  color: #0078d4;
`;
