import Age from './../src/galactic.js'

describe('Age', () => {
  let age;


  beforeEach(() => {
    age = new Age(34);
  });
  test('should create an age object', () => {
    expect(age.earth).toEqual(34);
  });
  test('should calculate age in Mercurian years', () => {
    expect(age.calculateMercury()).toEqual(141);
  })
  test('should calculate age in Venusian years', () => {
    expect(age.calculateVenus()).toEqual(54);
  })
});