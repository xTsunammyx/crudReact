import Usuario from '../model/Usuario';
import Id from '../model/Id';

const usuarios: Usuario[] = [
    {
      id: Id.novo(),
      nome: "João Silva",
      email: "joao.silva@email.com",
      senha: "senha123",
    },
    {
      id: Id.novo(),
      nome: "Maria Oliveira",
      email: "maria.oliveira@email.com",
      senha: "senha456",
    },
    {
      id: Id.novo(),
      nome: "Pedro Santos",
      email: "pedro.santos@email.com",
      senha: "senha789",
    },
    {
      id: Id.novo(),
      nome: "Ana Rodrigues",
      email: "ana.rodrigues@email.com",
      senha: "senhaabc",
    },
    {
      id: Id.novo(),
      nome: "Lucas Pereira",
      email: "lucas.pereira@email.com",
      senha: "senhaxyz",
    },
    {
      id: Id.novo(),
      nome: "Julia Ferreira",
      email: "julia.ferreira@email.com",
      senha: "senhaqwe",
    },
    {
      id: Id.novo(),
      nome: "Ricardo Gomes",
      email: "ricardo.gomes@email.com",
      senha: "senhaasd",
    },
    {
      id: Id.novo(),
      nome: "Fernanda Costa",
      email: "fernanda.costa@email.com",
      senha: "senhazxc",
    },
    {
      id: Id.novo(),
      nome: "Gabriel Almeida",
      email: "gabriel.almeida@email.com",
      senha: "senha1q2w",
    },
    {
      id: Id.novo(),
      nome: "Isabela Souza",
      email: "isabela.souza@email.com",
      senha: "senha3e4r",
    },
  ];

  export default usuarios;
  //exportando a lista de usuarios
  //como esta default, no Cadastro.tsx, pode ser qualquer nome(todosUsuarios)