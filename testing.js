var path = require('path')
var assert = require('assert');
var LocalStorage = require('node-localstorage').LocalStorage;
var jscrud = require('./jscrud.js');

var localStorage = new LocalStorage('./scratch');
var db = new jscrud.Jscrud(localStorage);


var records = [
	{first:'moshe', last:'bildner'},
	{first:'nechama', last:'bildner'},
	{first:'gery', last:'brownholtz'},
	{first:'moshe', last:'liss'},
	{first:'moshe', last:'fox'}
];

// create

records.forEach(function(record){
	db.createRecord(record);
});

// read

assert.equal(db.readRecord({ first: 'moshe' }).length, 3);
assert.deepEqual(db.readRecord({ first: 'moshe' })[0].last, 'bildner');

// check does not fail if filter criteria match key ('first') but not value
assert.equal(db.readRecord({ first: 'aoetahudontehu' }).length, 0);

// update

db.updateRecord({ first: 'moshe' }, { last: 'sky' });
assert(db.readRecord({ first: 'moshe' }).every(function(x) {
  return x.last === 'sky';
}));

// delete

db.deleteRecord({ first: 'moshe' });
assert.equal(db.readRecord({ first: 'moshe' }).length, 0);
