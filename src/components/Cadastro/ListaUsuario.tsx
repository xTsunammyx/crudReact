import Usuario from "@/data/model/Usuario";
import { FaEdit, FaTrash } from "react-icons/fa";

export interface ListaUsuarioProps {
  usuarios: Usuario[]; //array de usuarios e do tipo Usuario
}

export default function ListaUsuario(props: ListaUsuarioProps) {
    function renderizarUsuarios(usuario: Usuario) {
        return <div className="flex items-center p-6 py-3 rounded-md bg-zinc-700">
            <div className="flex-1 flex flex-col">
                 <span className="font-semibold">{usuario.nome}</span>
                 <span className="text-sm text-zinc-400">{usuario.email}</span>
            </div>
            
            <div className="flex gap-2">
                <button className="botao azul" ><FaEdit/></button>
                <button className="botao vermelho" ><FaTrash/></button>
            </div>
        </div>
    }
    return ( 
    <ul className="flex flex-col gap-2">
        {props.usuarios.map((usuario) => {
            return <li key={usuario.id}>
                {renderizarUsuarios(usuario)}
            </li>;
     })}    
    </ul>
    );
}