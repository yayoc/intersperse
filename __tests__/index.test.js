const intersperse = require("../");

describe("intersperse", () => {
	it("should return string", () => {
		const expected = "A,B,C,D,E,F";
		expect(intersperse(",", "ABCDEF")).toEqual(expected);
	});

	it("should return an array contains number and string", () => {
		const expected = [1, "/", 2, "/", 3];
		expect(intersperse("/", [1, 2, 3])).toEqual(expected);
	});

	it("should return an empty array when passing array is empty", () => {
		const expected = [];
		expect(intersperse("/", [])).toEqual(expected);
	});

	it("should return an array with using function", () => {
		const expected = [1, 3, 2, 5, 3];
		expect(
			intersperse(
				(prev, next) => {
					return prev + next;
				},
				[1, 2, 3]
			)
		).toEqual(expected);
	});
});
