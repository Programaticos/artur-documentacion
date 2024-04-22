import { useState } from "react";
import ContenidoCss from "./contenidoCss";
import SelectorCss from "./selectorCss";

export default function MainContainer() {
  const [contenidoPresente, setContenidoPresente] = useState<number>(0);
  return (
    <>
      <SelectorCss
        contenidoPresente={contenidoPresente}
        setContenidoPresente={setContenidoPresente}
      />
      <ContenidoCss contenidoPresente={contenidoPresente} />
    </>
  );
}
