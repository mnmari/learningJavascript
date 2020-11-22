'use strict';

const fs = require("fs");
const databaseFolder = "database/";

module.exports.readDB = async (filePath) => {
	try {
		return await readFile(databaseFolder + filePath);
	}
	catch (err) {
		if (err.code === 'ENOENT')
			return [];
		else throw err;
	}
};

module.exports.writeDB = async (filePath, data) => {
	await writeFile(databaseFolder + filePath, data);
};

function readFile(filePath) {
	return new Promise((fulfill, reject) => {
		fs.readFile(filePath, 'utf-8', (err, data) => {
			if (err) reject(err);
			else fulfill(JSON.parse(data.toString()));
		});
	});
}

function writeFile(filePath, data) {
	return new Promise((fulfill, reject) => {
		const json = JSON.stringify(data);

		fs.writeFile(filePath, json, (err) => {
			if (err) reject(err);
			fulfill();
		});
	});
}
