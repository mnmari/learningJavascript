'use strict';

const repository = require("../../data/birthday/birthday-repository");

module.exports.run = async (Value) => {
	return await repository.find(Value);
};
