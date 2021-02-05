import Age from './../src/galactic.js'

describe('Age', () => {
  let age;


  beforeEach(() => {
    age = new Age(34);
  });
  test('should create an age object', () => {
    expect(age.earth).toEqual(34);
  });
});