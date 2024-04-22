import { link } from "fs";
import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  border: 3px solid black;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
`;

const LinkA = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  /*flex-direction: row-reverse;*/
  padding-bottom: 5px;
`;

const TextSpan = styled.span`
  margin-left: 10px;
  color: #ed0bf5;
  &:hover {
    color: #f75a06;
    font-size: 22px;
  }
  transition: all 0.5s;
`;

export default function BarraNavegacion() {
  return (
    <NavBar>
      <LinkA href="/html">
        <img
          src="/img/HTML.png"
          alt="html"
          height={36}
          style={{ borderRadius: "50%" }}
        />
        <TextSpan>HTML</TextSpan>
      </LinkA>
      <LinkA href="/css">
        <img
          src="/img/CSS.png"
          alt="css"
          height={36}
          style={{ borderRadius: "50%" }}
        />
        <TextSpan>CSS</TextSpan>
      </LinkA>
      <LinkA href="/js">
        <img
          src="/img/JS.png"
          alt="js"
          height={36}
          style={{ borderRadius: "50%" }}
        />
        <TextSpan>JS</TextSpan>
      </LinkA>
      <LinkA href="/ts">
        <img
          src="/img/TS.png"
          alt="ts"
          height={36}
          style={{ borderRadius: "50%" }}
        />
        <TextSpan>TS</TextSpan>
      </LinkA>
      <LinkA href="/Angular">
        <img
          src="/img/Angular.jpeg"
          alt="Angular"
          height={36}
          style={{ borderRadius: "50%" }}
        />
        <TextSpan>Angular</TextSpan>
      </LinkA>
      <LinkA href="/html">
        <img
          src="https://oneteamsolutions.in/blogoneteam/wp-content/uploads/2020/05/REACT-JS-KOCHI.png"
          alt="React"
          height={36}
          style={{ borderRadius: "50%" }}
        />
        <TextSpan>React</TextSpan>
      </LinkA>
    </NavBar>
  );
}
