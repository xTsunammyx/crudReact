import Usuario from "@/data/model/Usuario";

export interface FormUsuarioProps {
  usuario: Partial<Usuario>; // recebe um usuario parcial
  alterarUsuario: (usuario: Partial<Usuario>) => void; //função que altera o usuario    
  salvar: () => void; //função que salva o usuario
  cancelar: () => void; //função que cancela a ação
}

export default function FormUsuario(props: FormUsuarioProps) {
    const {usuario, cancelar,salvar, alterarUsuario} = props; //desestruturação do objeto props, pegando o usuario, não é necessario passar props.usuario
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span>Nome</span>
        <input type="text" value={usuario.nome ?? ""}
            onChange={(e) => alterarUsuario({...usuario, nome: e.target.value})}//função que altera o nome do usuario, target é o componente que gerou o evento, que é o input, que tem o atributo value / pega o value modificado com o ultimo e(evento) que aconteceu e devolve um novo objeto com o nome alterado
        className="input" /> {/*input que recebe o valor do usuario passado como propriedade,  caso nome esteja vazio, recebera uma string vazia*/}
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
                <span>Email</span>
                <input type="text" value={usuario.email ?? ""} 
                   onChange={(e) => alterarUsuario({...usuario, email: e.target.value})} //função que altera o email do usuario, target é o componente que gerou o evento, que é o input, que tem o atributo value / pega o value modificado com o ultimo e(evento) que aconteceu e devolve um novo objeto com o email alterado
                className="input" />
            </div>

            <div className="flex flex-col gap-1 ">
                <span>Senha</span>
                <input type="password" value={usuario.senha ?? ""} 
                   onChange={(e) => alterarUsuario({...usuario, senha: e.target.value})}
                className="input" />
            </div>
        </div>

        <div className="flex gap-2">
            <button className="botao azul" onClick={salvar}>Salvar</button>
            <button className="botao cinza" onClick={cancelar}>Cancelar</button> {/*botão cancelar que chama a função cancelar, como ele não precisa de parametro, não é necessario criar um arrow fucntion () => */}
        </div>
    </div>
  );
}
// O componente FormUsuario recebe um objeto do tipo Usuario e renderiza um formulário com os campos nome, email e senha.
//o input value recebe o valor do usuario passado como propriedade
//para conseguir alterar os valores, é necessarios utilizar o useState(estado)