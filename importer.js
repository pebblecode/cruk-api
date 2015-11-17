const program = require('commander');

program
  .version('0.0.1')
  .option('-i, --data [value]', 'input data json')
  .option('-d, --dictionary [value]', 'input data dictionary, mapping file of sourceKey and newKey')
  .option('-o, --output [output]', 'output filename')
  .parse(process.argv);
 
if(program.data && program.dictionary){

  const dataPath = program.data,
    dictionaryPath = program.dictionary;

  const data = require(dataPath),
    dictionary = require(dictionaryPath);

  

  console.log(data);
  console.log(dictionary);
  
  process.exit(0);

}else{
  console.error('Invalid arguments, use --help for usage');
  process.exit(1);
}
