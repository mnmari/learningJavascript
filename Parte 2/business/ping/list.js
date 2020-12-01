'use strict';

const repository = require("../../data/ping/ping-repository");

module.exports.run = async () => {
	return await repository.list();
};
