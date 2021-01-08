'use strict';

const repository = require("../../data/birthday/birthday-repository");

module.exports.run = async () => {
	return await repository.list();
};
