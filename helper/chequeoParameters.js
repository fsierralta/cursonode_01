const argv=require('yargs')
      .option('b',{
        alias:'base',
        default:5,
        type:'number',
        demandOption:true,
        describe:"debe tipeear un numero"

      })
      .option('l',{
        alias:'lista',
        default:false,
        type:'boolean',
        demandOption:true,
        describe:"debe indicar listar"

      })
      .check((argv,options)=>{
            if (isNaN(argv.b)) {
                   throw new Error("debe introducir un numero");
            } else {
                return true;
            }
            

      })
      .argv;

module.exports={
  argv

};
