const ProfCRUD = require("./CRUD/AlunoCRUD");
const Prof = require("./model/Aluno");
const prompt = require("prompt-sync")();


cadastrar();





  function continuar()
{  
   let op = prompt("Deseja continuar com o cadastro? s/n");
   if(op.toLowerCase()==="s")
   cadastrar();
}
function cadastrar()
{
  console.log("Bem-vindo ao cadastro de professores");
  console.log("Selecione uma entre as opções");
  console.log("1 Inserir ");
  console.log("2 Apagar");
  console.log("3 Listar todos");
  console.log("4 Atualizar");
  let op=prompt("");

  const profCrud = new ProfCRUD();
  const prof= new Prof();
  switch (op) {
  case "1" :
   prof.setNome=prompt("Digite o nome: ");
   prof.setMateria=prompt("Digite sua disciplina: ");
   prof.setCarga=prompt("Digite sua carga: ");
   profCrud.Inserir(prof.getNome,prof.getMateria,prof.getCarga); 
   continuar();  
  
    break;
    case "2":
    prof.setID=prompt("Digite o id do prof a ser excluido: ");
    profCrud.Apagar(prof.getID);
    continuar();  
    
    break;
    case "3":   
    profCrud.ListarTodos(); 
    continuar();     
    break;
    case "4" :
      prof.setID=prompt("Qual é o ID? ");
      prof.setNome=prompt("Digite o novo nome: ");
      prof.setMateria=prompt("Digite sua Disciplina: ");
      prof.setCarga=prompt("Digite sua carga: ");
      profCrud.Atualizar(prof.getID,prof.getNome,prof.getMateria,prof.getCarga); 
      continuar();  

  default:
    break;
  }
}


 



