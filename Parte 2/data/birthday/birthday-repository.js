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

	let index = list.findIndex((item) => item.id === request);

	return list[index];
};