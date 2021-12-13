const {
    returnTwo,
    greeting,
    add
} = require('./functions.js')

test('Should return 2', () => {
    expect(2).toEqual(2);
})

test('Should return greeting', () => {
    expect(greeting("Jim")).toBe(`Hello, Jim.`);
})

describe('Math functions', () => {
    test('Should add 2 nums', () => {
        expect(add(1, 2)).toEqual(3);
    })

    test('Should subtract 2 nums', () => {
        expect(subtract(4, 2)).toEqual(2);
    })

    test('Should multiply 2 nums', () => {
        expect(mulitply(2, 2)).toEqual(4);
    })

    test('Should divide 2 nums', () => {
        expect(divide(10, 5)).toEqual(2);
    })
})

