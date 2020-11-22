'use strict';

let file = require("../util/file-extension");
let Ping = require("../../data/ping/model/ping")
let fileName = "ping.json";

module.exports.list = async () => {
	let list = await file.readFile(fileName);

	return list.map((item) => new Ping(item.id, new Date(item.time)))
};

module.exports.write = async (data) => {
	let list = await file.readFile(fileName);
	list.push(data);

	await file.writeFile(fileName, list);

	return data;
};
