var path = require('path')

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

records.forEach(function(record){
	db.createRecord(record);
});
