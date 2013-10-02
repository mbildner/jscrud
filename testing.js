var path = require('path')

var jscrud = require(path.join(path.dirname(module.filename), 'jscrud.js'));

var db = new jscrud.Jscrud();


records = [
	{first:'moshe', last:'bildner'},
	{first:'nechama', last:'bildner'},
	{first:'gery', last:'brownholtz'},
	{first:'moshe', last:'liss'},
	{first:'moshe', last:'fox'}
];

records.forEach(function(record){
	db.createRecord(record);
});
