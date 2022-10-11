const fs=require('node:fs');
const colors=require('colors');




  const createfile=async(numero,listar)=>{
    let salida;
    if(listar){
      salida=`
        "============================
        -     Tabla del ${numero}  -
        ============================

        ` ; 
        console.log(salida.bgBlue);  
    };

    
        try {
            for(let i=1;i<10;i++){
                let resultado=numero*i;
                salida+=`
                          valor ${numero}x ${i}=${resultado}\n`;
            
            };
                 
              fs.writeFileSync(`./salida/tablat ${numero}.txt`,salida);
              return `tablat ${numero}.txt`;
            
        } catch (error) {
            throw error;
        }
            
        
    

};

module.exports={
    createfile,
}


