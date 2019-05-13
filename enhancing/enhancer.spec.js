const enhancer = require('./enhancer.js');
// test away!

let item1 = {
	name: 'sword',
	enhancement: 10,
	durability: 50
};
let item2 = {
	name: 'arbalest',
	enhancement: 20,
	durability: 100
};
let item3 = {
	name: 'gold sword',
	enhancement: 5,
	durability: 20
};

describe('enhancer.js', () => {
	describe('repair method', () => {
		it('should return an object with the durability restored to 100', () => {
			expect(enhancer.repair(item1)).toEqual({
				name: item1.name,
				enhancement: item1.enhancement,
				durability: 100
			});
			expect(enhancer.repair(item2)).toEqual({
				name: item2.name,
				enhancement: item2.enhancement,
				durability: 100
			});
			expect(enhancer.repair(item3)).toEqual({
				name: item3.name,
				enhancement: item3.enhancement,
				durability: 100
			});
		});
	});
	describe('succeed method ', () => {
		it('should return an object, if enhancement is equal 20, it will not be changed. Otherwise increases by 1', () => {
			expect(enhancer.succeed(item1)).toEqual({
				name: item1.name,
				enhancement: 11,
				durability: item1.durability
			});
			expect(enhancer.succeed(item2)).toEqual({
				name: item2.name,
				enhancement: 20,
				durability: item2.durability
			});
		});
	});
	describe('fail method', () => {
		it('should return an object, with durability decreased by 5 if enchancement less then 15, else it decreases by 10. Should return enhancement decreased by 1, if it was greater then 16', () => {
			expect(enhancer.fail(item1)).toEqual({
				name: item1.name,
				enhancement: item1.enhancement,
				durability: 45
			});
			expect(enhancer.fail(item2)).toEqual({
				name: item2.name,
				enhancement: 19,
				durability: 90
			});
			expect(enhancer.fail(item3)).toEqual({
				name: item3.name,
				enhancement: item3.enhancement,
				durability: 15
			});
		});
	});
});
