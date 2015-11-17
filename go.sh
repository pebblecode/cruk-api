node transformer.js -i ./cancerdata.json -d ./cancerfields.json -c
# node transformer.js -i ./patientsregistered.json -d ./cancerfields.json
# node transformer.js -i ./stg1and2detection.json -d ./cancerfields.json -c
# node joiner.js -c ./cancerdata-processed.json -p ./patientsregistered-processed.json -s ./stg1and2detection-processed.json