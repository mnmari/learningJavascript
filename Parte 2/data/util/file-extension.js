'use strict';

const fs = require("fs");

module.exports.readFile = (filePath) => {
	return new Promise((fulfill, reject) => {
		fs.readFile(filePath, 'utf-8', (err, data) => {
			if (err) {
				if (err.code === 'ENOENT') fulfill([]);
				else reject(err);
			}
			else fulfill(JSON.parse(data.toString()));
		});
	});
};

module.exports.writeFile = (filePath, data) => {
	return new Promise((fulfill, reject) => {
		const json = JSON.stringify(data);

		fs.writeFile("database/" +filePath, json, (err) => {
			if (err) reject(err);
			fulfill();
		});
	});
};
