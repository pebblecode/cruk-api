To begin with. Prior to initial commit

replace `node-starter-kit` with your project name

[![npm version](https://badge.fury.io/js/node-starter-kit.svg)](http://badge.fury.io/js/node-starter-kit)

[![Build Status](https://travis-ci.org/pebblecode/node-starter-kit.svg)](https://travis-ci.org/pebblecode/node-starter-kit)


## NPM Commands
Test `npm run test` or `npm run test:watch`
Lint `npm run lint`
Coverage `npm run coverage`
Babel Transpile `npm run compile`

### Project Description
An API for the Cancer Research UK Data Hack

### MongoDB Install
DB Name: cruk
Collections: hospitals

data import notes:
```
mongoimport -d test -c meta --type csv --headerline ./Data\ download\ Nov\ 2015.xlsx\ -\ Metadata.csv 
mongoimport -d test -c data --type csv --headerline ./Data\ download\ Nov\ 2015.xlsx\ -\ Data.csv 

db.data.find({
	"GeographyID" : ccg
}).map(function(c) {
    return {
    	meta: db.meta.findOne({ "ElementID": c.IndicatorID }),
    	cancer: db.ccgs.findOne({ "ccg": c.IndicatorID })
        ccg: c,
    }
})
```

If you have issues running Mongo in OS X (it sometimes complains about opening /data/db/mongod.lock), you may need to chown the dir. This is as simple as:
`sudo chown -R `id -u` /data/db`