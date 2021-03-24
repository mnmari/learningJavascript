'use strict';

let file = require("../util/database-util");
let Birthday = require("../../data/birthday/model/birthday");
let fileName = "birthday.json";

module.exports.write = async (data) => {
	let list = await file.readDB(fileName);
	list.push(data);

	await file.writeDB(fileName, list);

	return data;
};

module.exports.list = async () => {
	let list = await file.readDB(fileName);

	return list.map((item) => new Birthday(item.id, item.name, item.date, item.createdAt));
};

module.exports.find = async (request) => {
	let list = await file.readDB(fileName);
		
	let object = list.find((item) => item.id === request); 

	if (object === undefined) {
		return null;
	}
	else {
		return new Birthday(object.id, object.name, object.date, object.createdAt);
	}
};

module.exports.delete = async (request) => {
	let list = await file.readDB(fileName);
	
	let index = list.findIndex((item) => item.id === request);

	if (index === -1) {
		return null;
	}

	let deletedObject = list[index];
	list.splice(index, 1);

	await file.writeDB(fileName, list);
	return new Birthday(deletedObject.id, deletedObject.name, deletedObject.date, deletedObject.createdAt);
	
};
