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
mongoimport -d cruk -c meta --type csv --headerline ~/Downloads/Data\ download\ Nov\ 2015.xlsx\ -\ Metadata.csv 
mongoimport -d cruk -c data --type csv --headerline ~/Downloads/Data\ download\ Nov\ 2015.xlsx\ -\ Data.csv 

db.fullccgs.insert(db.ccgs.find().map(function(c) {
		c.data = db.data.find({
			"GeographyID": c.ccg
		}).toArray().map(function(indicator){
			indicator.meta = db.meta.findOne({
				"ElementID": indicator.IndicatorID
			})
			return indicator
		})
	    return c
	})
)
```

If you have issues running Mongo in OS X (it sometimes complains about opening /data/db/mongod.lock), you may need to chown the dir. This is as simple as:
`sudo chown -R `id -u` /data/db`