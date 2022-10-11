const {createfile}=require('./helper/helper');
const {argv}=require('./helper/chequeoParameters');
 createfile(argv.b,argv.l)
 .then(valor=>console.log(valor)) 
