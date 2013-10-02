# JScrud

Implements Create, Read, Update, and Delete methods for javascript objects. 

All functions below are methods of a Jscrud object.

* Create:
  
  Records are created by calling the createRecord(item) method, with a JSON object as the sole argument.  This item will be indexed and stored in memory. 

* Read:
  
  Read records by calling readRecord(item), with a JSON object having any key:value pairs you wish to query on. Returns an array of all objects matching all of that object's values.

* Update:
  
  Update records by calling updateRecord(exampleItem, updatedKeyValues), the example item, as with readRecord, is a simple JSON object of the patter you wish to find, updatedKeyValues is an object with key:values you wish to insert into the object being updated.  Information can be added or overridden in this way; currently it cannot be deleted from objects.

* Delete:
  
  Delete records by calling deleteRecord(item), which will match the object given as a parameter and delete any stored item that matches it.  



