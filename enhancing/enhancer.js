module.exports = {
	succeed,
	fail,
	repair,
	get
};

function succeed(item) {
	return { ...item };
}

function fail(item) {
	return { ...item };
}

// a repair(item) method that accepts an item object
// and returns a new item with the durability restored to 100.
function repair(item) {
	return { ...item, durability: 100 };
}

function get(item) {
	return { ...item };
}

// Items have name, durability and enhancement.
// The item's enhancement it's a number from 0 to 20.
// The item's durability it's a number from 0 to 100.
