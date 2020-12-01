'use strict';

let file = require("../util/database-util");
let Ping = require("../../data/ping/model/ping");
let fileName = "ping.json";

module.exports.list = async () => {
	let list = await file.readDB(fileName);

	return list.map((item) => new Ping(item.id, new Date(item.createdAt)));
};

module.exports.write = async (data) => {
	let list = await file.readDB(fileName);
	list.push(data);

	await file.writeDB(fileName, list);

	return data;
};
