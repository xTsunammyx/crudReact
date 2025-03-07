import { v4 as uuidv4 } from 'uuid';
import Usuario from '../model/Usuario';

const usuarios: Usuario[] = [
    {
      id: uuidv4(),
      nome: "João Silva",
      email: "joao.silva@email.com",
      senha: "senha123",
    },
    {
      id: uuidv4(),
      nome: "Maria Oliveira",
      email: "maria.oliveira@email.com",
      senha: "senha456",
    },
    {
      id: uuidv4(),
      nome: "Pedro Santos",
      email: "pedro.santos@email.com",
      senha: "senha789",
    },
    {
      id: uuidv4(),
      nome: "Ana Rodrigues",
      email: "ana.rodrigues@email.com",
      senha: "senhaabc",
    },
    {
      id: uuidv4(),
      nome: "Lucas Pereira",
      email: "lucas.pereira@email.com",
      senha: "senhaxyz",
    },
    {
      id: uuidv4(),
      nome: "Julia Ferreira",
      email: "julia.ferreira@email.com",
      senha: "senhaqwe",
    },
    {
      id: uuidv4(),
      nome: "Ricardo Gomes",
      email: "ricardo.gomes@email.com",
      senha: "senhaasd",
    },
    {
      id: uuidv4(),
      nome: "Fernanda Costa",
      email: "fernanda.costa@email.com",
      senha: "senhazxc",
    },
    {
      id: uuidv4(),
      nome: "Gabriel Almeida",
      email: "gabriel.almeida@email.com",
      senha: "senha1q2w",
    },
    {
      id: uuidv4(),
      nome: "Isabela Souza",
      email: "isabela.souza@email.com",
      senha: "senha3e4r",
    },
  ];

  export default usuarios;
  //exportando a lista de usuarios
  //como esta default, no Cadastro.tsx, pode ser qualquer nome(todosUsuarios)