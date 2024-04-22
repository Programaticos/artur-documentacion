import styled from "styled-components";

const DivContainerContenido = styled.div`
  width: 80vw;
  height: 70vh;
`;

const H2Titulo = styled.h2`
  background: #43a3a3;
  /* border-left: 596.4px; */
  margin: 6px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  align-items: center;
  justify-content: center;
`;

const ContenidoDe = styled.p`
  padding: 10%;
  margin: 20px;
  background: #00ffac45;
  border: 10px dashed #6a0f0f;
  border-radius: 48px;
`;

export default function ContenidoCss(props: any) {
  return (
    <DivContainerContenido>
      <H2Titulo>{props.contenidoPresente}.-ТУЧА</H2Titulo>
      <div>
        <ContenidoDe>
          Последняя туча рассеянной бури!
          <br />
          Одна ты несешься по ясной лазури,
          <br />
          Одна ты наводишь унылую тень,
          <br />
          Одна ты печалишь ликующий день.
          <br />
          <br />
          Ты небо недавно кругом облегала,
          <br />И молния грозно тебя обвивала;
          <br />И ты издавала таинственный гром
          <br />И алчную землю поила дождем.
          <br />
          <br />
          Довольно, сокройся! Пора миновалась,
          <br />
          Земля освежилась, и буря промчалась,
          <br />И ветер, лаская листочки древес,
          <br />
          Тебя с успокоенных гонит небес.
        </ContenidoDe>
      </div>
    </DivContainerContenido>
  );
}
