'use strict'

const program = require('commander');
const fs = require('fs');
const camelCase = require('camelcase');

program
  .version('0.0.1')
  .option('-i, --data [value]', 'input data json')
  .option('-d, --dictionary [value]', 'input data dictionary, mapping file of sourceKey and newKey')
  .option('-o, --output [output]', 'output filename')
  .option('-c, --camel', 'camelcase')
  .parse(process.argv);

if (program.data && program.dictionary) {

  const dataPath = program.data,
    dictionaryPath = program.dictionary;

  const documents = require(dataPath),
    dictionary = require(dictionaryPath);

  const dictKeys = Object.keys(dictionary);

  var newDocuments = [];

  documents.forEach(function(doc) {

    var newDoc = {};

    dictKeys.forEach(function(dictKey) {

      if (doc[dictKey]) {
        newDoc = doc;
        doc[dictionary[dictKey]] = doc[dictKey];

        delete doc[dictKey];
      }

    });

    for (let k in newDoc) {
      if (newDoc.hasOwnProperty(k)) {

        let newK;

        if (program.camel) {
          newK = camelCase(k);
        }else{
          newK = k.toLowerCase();
        }

        newDoc[newK] = newDoc[k];
        delete newDoc[k];
      }
    }

    newDocuments.push(newDoc);

  });

  const dataPathReplaced = dataPath.replace(".json", "")

  fs.writeFileSync(`${dataPathReplaced}-processed.json`, JSON.stringify(newDocuments));

  process.exit(0);

} else {
  console.error('Invalid arguments, use --help for usage');
  process.exit(1);
}