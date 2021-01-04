'use strict';

const repository = require("../../data/birthday/birthday-repository");
const Birthday = require("../../data/birthday/model/birthday");
const nanoid = require("nanoid").nanoid;

module.exports.run = async (Name, birthdayDate) => {
	let id = nanoid(6);
	let newBirthday = new Birthday(id, Name, birthdayDate, new Date()); 

	return await repository.write(newBirthday);
};
