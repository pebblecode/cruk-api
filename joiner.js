'use strict';

const program = require('commander');
const fs = require('fs');

program
  .version('0.0.1')
  .option('-c, --cancer [value]', 'input cancer json')
  .option('-p, --patients [value]', 'input patients json')
  .option('-s, --stages [value]', 'input stages json')
  .parse(process.argv);


function addProperty(doc, subDoc, propName) {
  if (subDoc.ccg === doc.ccg) {
    doc[propName] = subDoc;

    if (propName === 'stages') {
      console.log('stages being added');
      console.log(doc[propName]);
    }
  }
}

if (program.cancer && program.patients && program.stages) {

  const cancer = require(program.cancer);
  const patients = require(program.patients);
  const stages = require(program.stages);

  cancer.forEach(c => {
    patients.forEach((p) => addProperty(c, p, 'patients'));
    stages.forEach((s) => addProperty(c, s, 'stages'));
  });

  fs.writeFileSync('output.json', JSON.stringify(cancer));

  process.exit(0);

} else {
  console.error('Invalid arguments, use --help for usage');
  process.exit(1);
}