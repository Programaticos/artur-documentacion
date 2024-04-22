import styled from "styled-components";

const DivContainerSelector = styled.div`
  width: 40vw;
  height: 70vh;
  border: 2px solid #fd02ef;
  border-radius: 8px;
  overflow: scroll;
  overflow-x: hidden;
`;

const DivSelector = styled.div<{ selected: boolean }>`
  background: #68e7ff;
  ${(props) => props.selected && "background: green;"}
  /*color: white;*/
  ${(props) => (props.selected ? "color: #17373d" : "color: white;")}
  border-radius: 3px;
  height: 20px;
  display: flex;
  align-items: center;
  padding: 5px;
  padding-left: 10px;
  margin: 1%;
`;

export default function SelectorCss(props: any) {
  return (
    <DivContainerSelector>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
        (e: number, i: number) => {
          return (
            <DivSelector
              key={i}
              onClick={() => {
                props.setContenidoPresente(i);
              }}
              selected={props.contenidoPresente === i ? true : false}
            >
              {e}.-Hola
            </DivSelector>
          );
        }
      )}
    </DivContainerSelector>
  );
}
