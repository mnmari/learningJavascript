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

module.exports.list = async (name, birthdayDate) => {
	let list = await file.readDB(fileName);

	//list all
	if (name === "" && birthdayDate === "") {
		return list.map((item) => new Birthday(item.id, item.name, item.date, item.createdAt));
	}

	//filter by name
	else if (name !== "" && birthdayDate === "") {
		//checks if at least one register is found
		if ((list.filter((item) => item.name === name)).length !== 0) {
			return list.filter((item) => item.name === name)
				.map((item) => new Birthday(item.id, item.name, item.date, item.createdAt));
		}
		else {
			return null;
		}
	}

	//filter by birthday date
	else if (name === "" && birthdayDate !== "") {
		//checks if at least one register is found
		if ((list.filter((item) => item.date === birthdayDate)).length !== 0) {
			return list.filter((item) => item.date === birthdayDate)
				.map((item) => new Birthday(item.id, item.name, item.date, item.createdAt));
		}
		else
			return null;
	}

	//filter by name and birthday date
	else if (name !== "" && birthdayDate !== "") {
		
		//checks if at least one register is found
		if ((list.filter((item) => findNameAndBirthdayDate(item, name, birthdayDate))).length !== 0) {
			return list.filter((item) => findNameAndBirthdayDate(item, name, birthdayDate))
				.map((item) => new Birthday(item.id, item.name, item.date, item.createdAt));
		}
		else
			return null;
	}
		function findNameAndBirthdayDate(item, name, birthdayDate) {
			if (item.name === name && item.date === birthdayDate)
				return true;
			else
				return false;
		}
	};

	module.exports.find = async (request) => {
		let list = await file.readDB(fileName);

		let object = list.find((item) => item.id === request);

		if (object === undefined) {
			return null;
		}
		else {
			return new Birthday(object.id, object.name, object.date, object.createdAt);
		}
	};

	module.exports.delete = async (request) => {
		let list = await file.readDB(fileName);

		let object = list.find((item) => item.id === request);

		list.splice(list.indexOf(object), 1);

		if (object === undefined)
			return null;
		else
			await file.writeDB(fileName, list);
	};

	module.exports.update = async (request, name, birthday) => {
		let list = await file.readDB(fileName);

		let object = list.find((item) => item.id === request);

		//update name and birthday
		if (object !== undefined && name !== "" && birthday !== "") {
			list[list.indexOf(object)] = new Birthday(object.id, name, birthday, object.createdAt);
		}
		//update name
		else if (object !== undefined && name !== "" && birthday === "") {
			list[list.indexOf(object)] = new Birthday(object.id, name, object.date, object.createdAt);
		}
		//update birthday
		else if (object !== undefined && name === "" && birthday !== "") {
			list[list.indexOf(object)] = new Birthday(object.id, object.name, birthday, object.createdAt);
		}

		if (object === undefined)
			return null;
		else
			await file.writeDB(fileName, list);
	};
