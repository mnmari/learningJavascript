'use strict';

const repository = require("../../data/ping/ping-repository");
const Ping = require("../../data/ping/model/ping");
const nanoid = require("nanoid").nanoid;

module.exports.run = async () => {
	let id = nanoid(6);
	let newPing = new Ping(id, new Date());

	return await repository.write(newPing);
};
