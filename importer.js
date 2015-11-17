const program = require('commander');

program
  .version('0.0.1')
  .option('-d, --data [value]', 'input data json')
  .option('-dict, --dictionary [value]', 'input data dictionary, mapping file of sourceKey and newKey')
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
