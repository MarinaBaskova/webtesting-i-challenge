module.exports = {
	succeed,
	fail,
	repair,
	get
};

function succeed(item) {
	return {
		...item,
		enhancement: item.enhancement < 20 ? item.enhancement + 1 : item.enhancement
	};
}

function fail(item) {
	return {
		...item,
		durability: item.enhancement < 15 ? item.durability - 5 : item.durability - 10,
		enhancement: item.enhancement > 16 ? item.enhancement - 1 : item.enhancement
	};
}

// a repair(item) method that accepts an item object
// and returns a new item with the durability restored to 100.
function repair(item) {
	return { ...item, durability: 100 };
}

function get(item) {
	return {
		...item,
		name: item.enhancement === 0 ? item.name : `[+${item.enhancement}]${item.name}`
	};
}

// Items have name, durability and enhancement.
// The item's enhancement it's a number from 0 to 20.
// The item's durability it's a number from 0 to 100.
