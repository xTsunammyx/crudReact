"use Client";
import { useState } from "react";
import todosUsuarios from "../../data/constants/usuarios"
import Usuario from "@/data/model/Usuario";
import ListaUsuario from "./ListaUsuario";

export default function Cadastro() {

  const [usuarios, setUsuarios] = useState<Usuario[]>(todosUsuarios);

  return (
    <div className="flex flex-col gap-5">
      <h1>Cadastro</h1>
       <ListaUsuario usuarios={usuarios} />
    </div>
  );
}
//a lista de usuario ficara em um estado, pois serao modificados

/*A diretiva "use client" informa ao Next.js que um componente 
deve ser renderizado e executado no navegador.
Componentes do cliente são essenciais para adicionar interatividade e 
utilizar recursos do navegador em suas aplicações Next.js. */