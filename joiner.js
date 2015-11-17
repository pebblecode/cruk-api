'use strict'

const program = require('commander');
const fs = require('fs');
const camelCase = require('camelcase');

program
  .version('0.0.1')
  .option('-c, --cancer [value]', 'input cancer json')
  .option('-p, --patients [value]', 'input patients json')
  .option('-s, --stages [value]', 'input stages json')
  .parse(process.argv);
 
if(program.cancer && program.patients && program.stages){

  const cancer = require(program.cancer);
  const patients = require(program.patients);
  const stages = require(program.stages);

  patients.forEach((subset) => addSubset(cancer, subset, 'patients'));
  stages.forEach((subset) => addSubset(cancer, subset, 'stages'));

  fs.writeFileSync('output.json', JSON.stringify(cancer));

  process.exit(0);

}else{
  console.error('Invalid arguments, use --help for usage');
  process.exit(1);
}

function addSubset(superset, subset, propName) {
  if(subset.ccg === superset.ccg)
    superset[propName] = subset;
}