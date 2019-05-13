const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
	describe('repair method', () => {
		it('should return an object with the durability restored to 100', () => {
			expect(enhancer.repair({ name: 'sword', enhancement: 10, durability: 50 })).toEqual({
				name: 'sword',
				enhancement: 10,
				durability: 100
			});
			expect(enhancer.repair({ name: 'arbalest', enhancement: 20, durability: 100 })).toEqual({
				name: 'arbalest',
				enhancement: 20,
				durability: 100
			});
			expect(enhancer.repair({ name: 'gold sword', enhancement: 5, durability: 20 })).toEqual({
				name: 'gold sword',
				enhancement: 5,
				durability: 100
			});
		});
	});
});
