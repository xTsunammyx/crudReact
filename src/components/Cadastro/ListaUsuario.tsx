import Usuario from "@/data/model/Usuario";
import { FaEdit, FaTrash } from "react-icons/fa";

export interface ListaUsuarioProps {
  usuarios: Usuario[]; //array de usuarios e do tipo Usuario
  removerUsuario: (usuario: Usuario) => void; //passa o usuario para o Cadastro - comunicação indireta
  selecionarUsuario: (usuario: Usuario) => void; //passa o usuario para o Cadastro - comunicação indireta
}

export default function ListaUsuario(props: ListaUsuarioProps) {
    function renderizarUsuarios(usuario: Usuario) {
        return <div className="flex items-center p-6 py-3 rounded-md bg-zinc-700">
            <div className="flex-1 flex flex-col">
                 <span className="font-semibold">{usuario.nome}</span>
                 <span className="text-sm text-zinc-400">{usuario.email}</span>
            </div>
            
            <div className="flex gap-2">
                <button className="botao azul" onClick={() => props.selecionarUsuario(usuario)}><FaEdit/></button>
                <button className="botao vermelho" onClick={() => props.removerUsuario(usuario)}><FaTrash/></button>
            </div>
        </div>
    }
    return ( //este map transforma uma lista de usuarios em uma de <li>
    <ul className="flex flex-col gap-2"> 
        {props.usuarios.map((usuario) => {
            return <li key={usuario.id}>
                {renderizarUsuarios(usuario)}
            </li>;
     })}    
    </ul>
    );
}
//onClick precisa estar em um componente use Client, que roda do lado do usuarios, porém como o componente pai de ListaUsuario já é use Client, não é necessário
//o botão de remover usuario chama a função removerUsuario do componente pai, passando o usuario que deve ser removido