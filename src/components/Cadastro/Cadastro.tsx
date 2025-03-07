"use Client";
import { useState } from "react";
import todosUsuarios from "../../data/constants/usuarios"
import Usuario from "@/data/model/Usuario";
import ListaUsuario from "./ListaUsuario";
import FormUsuario from "./FormUsuario";
import Id from "@/data/model/Id";

export default function Cadastro() {

  const [usuarioAtual, setUsuarioAtual] = useState<Partial<Usuario> | null>(null); //estado do usuario atual, comecando vazio

  const [usuarios, setUsuarios] = useState<Usuario[]>(todosUsuarios);

  function removerUsuario(usuarioRemover: Usuario) {
    const novosUsuarios = usuarios.filter(u => u.id !== usuarioRemover.id); //todos usuarios, menos o removido
    setUsuarios(novosUsuarios); //seta o estado com a nova lista de usuarios
  }

  function selecionarUsuario(usuario: Partial<Usuario> = {}) {
    setUsuarioAtual(usuario); //seta o usuario atual com o usuario passado
  }

  function salvarUsuario() {
    const usuarioExistente = usuarios.find(u => u.id === usuarioAtual?.id); //verifica se o usuario atual esta presente na lista de usuarios
    
    if(usuarioExistente) { //se o usuario existir

      const novosUsuarios = usuarios.map(u =>{
        return u.id === usuarioAtual?.id ? usuarioAtual : 
        u; //se o id for igual ao id do usuario atual, retorna o usuario atual, senao retorna o usuario
      }); //mapeia a lista de usuarios, se o id for igual ao id do usuario atual, retorna o usuario atual, senao retorna o usuario
      
      setUsuarios(novosUsuarios as Usuario[]); //seta o estado com a nova lista de usuarios
    }else {
      setUsuarios([...usuarios, usuarioAtual as Usuario]); //adiciona o usuario atual a lista de usuarios
    }
    setUsuarioAtual(null); //seta o usuario atual como nulo
  }
  
  function cancelar() {
    setUsuarioAtual(null); //seta o usuario atual como nulo
  }


  return ( //se usuario atual for diferente de nulo, renderiza o formulario, senao, renderiza a lista de usuarios
    <div className="flex flex-col gap-5 "> 
      <button className="botao verde self-end" onClick={() => selecionarUsuario({id: Id.novo()})}>Novo Usuário</button>
        {usuarioAtual ? ( 
        <FormUsuario 
          usuario={usuarioAtual}  //recebe o usuario atual
          alterarUsuario={setUsuarioAtual} //altera o usuario atual
          salvar={salvarUsuario}
          cancelar={cancelar}/> //cancela a ação
        ): (
          <ListaUsuario 
          usuarios={usuarios} //lista que recebe a lista de usuarios
          selecionarUsuario={selecionarUsuario} //ao ser chamado vai alterar o usuario atual,deixando de ser null, mundando a visualização, para mostrar o formulario ao invez da lista
          removerUsuario={removerUsuario}/>
        )} 
    </div>
  );
}
//a lista de usuario ficara em um estado, pois serao modificados

/*A diretiva "use client" informa ao Next.js que um componente 
deve ser renderizado e executado no navegador.
Componentes do cliente são essenciais para adicionar interatividade e 
utilizar recursos do navegador em suas aplicações Next.js. */