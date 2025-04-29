import db from "@/lib/db"
export default async () => {
    const usuarios = await db.query("select * from usuario")
 return (<>
    <h1>Lista de usuarios</h1>
    <div>
      {
         usuarios.rows.map( 
            a => (
               <div>
                  {a.nome} faz parte do projeto {a.cargo}
               </div>
            ) 
         )
      }
   </div>
 </>);
}