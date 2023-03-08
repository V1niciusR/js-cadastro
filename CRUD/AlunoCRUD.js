class ProfCRUD
{
    
    

    async Inserir(nome,materia,carga)
    {  
    
        const mysql = require('mysql2/promise')

        // create the connection to database
        const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'professor'
        });
               
       const values = [nome, materia, carga];
       const sql = 'INSERT INTO prof(nome,materia,carga) VALUES (?,?,?);';
      
       const [rows] =await connection.query(sql,values);
       if(rows.affectedRows)
       console.log("Valor inserido");
       connection.destroy();
      
     
    }
    async Atualizar(id,nome,materia,carga)
    {  
    
        const mysql = require('mysql2/promise')

        // create the connection to database
        const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'professor'
        });
              
       const values = [nome, materia, carga, id];
       const sql = ' UPDATE prof SET nome = ?, materia = ?, carga =?  WHERE id =?; ';
      
       const [rows] =await connection.query(sql,values);
       if(rows.affectedRows)
       console.log("Valor Atualizado");
       connection.destroy();
      
     
    }
    async Apagar(id)
    {  
    
        const mysql = require('mysql2/promise')

        // create the connection to database
        const connection =await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'professor'        
        });
               
       const values = [id];
       const sql = 'DELETE FROM prof WHERE Id=?';
      
       const [rows] =await connection.query(sql,values);
       if(rows.affectedRows)
       console.log("Valor apagado");
       connection.destroy();
    }
    async ListarTodos()
    {  
    
        const mysql = require('mysql2/promise')

        // create the connection to database
        const connection =await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'professor'        
        });
               
       
       const sql = 'SELECT * FROM prof';
      
       const [rows] =await connection.query(sql);
       if(rows.length>=1)
       console.log(rows);
       else
       console.log("Tabela vazia");
       connection.destroy();
    }
   
}
module.exports= ProfCRUD;