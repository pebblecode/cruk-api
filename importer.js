'use strict'

const program = require('commander');
const fs = require('fs');

program
  .version('0.0.1')
  .option('-i, --data [value]', 'input data json')
  .option('-d, --dictionary [value]', 'input data dictionary, mapping file of sourceKey and newKey')
  .option('-o, --output [output]', 'output filename')
  .parse(process.argv);
 
if(program.data && program.dictionary){

  const dataPath = program.data,
    dictionaryPath = program.dictionary;

  const documents = require(dataPath),
    dictionary = require(dictionaryPath);

  const dictKeys = Object.keys(dictionary);

  var newDocuments = [];
  
  documents.forEach(function(doc){

    var newDoc = {};

    dictKeys.forEach(function(dictKey){

      if(doc[dictKey]){
        newDoc = doc;
        doc[dictionary[dictKey]] = doc[dictKey];

        delete doc[dictKey];
      }

    });

    newDocuments.push(newDoc);

  });

  fs.writeFileSync(`${dataPath}-processed.json`, JSON.stringify(newDocuments));

  process.exit(0);

}else{
  console.error('Invalid arguments, use --help for usage');
  process.exit(1);
}
