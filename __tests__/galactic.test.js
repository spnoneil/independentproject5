import Age from './../src/galactic.js'

describe('Age', () => {
  let age;


  beforeEach(() => {
    age = new Age(34);
    age.calculateAge();
    age.lifeExpectancy();
    age.yearsLeft();
  });

  test('should create an age object', () => {
    expect(age.earthAge).toEqual(34);
  });
  test('should calculate age in Mercurian years', () => {
    expect(age.mercuryAge).toEqual(141);
  })
  test('should calculate age in Venusian years', () => {
    expect(age.venusAge).toEqual(54);
  })
  test('should calculate age in Martian years', () => {
    expect(age.marsAge).toEqual(18);
  });
  test('should calculate age in Jupiterian years', () => {
    expect(age.jupiterAge).toEqual(2);
  });
  test('should calculate life expectancy in Mercurian years', () => {
    expect(age.mercuryExpectancy).toEqual(304);
  });
  test('should calculate life expectancy in Venusian years', () => {
    expect(age.venusExpectancy).toEqual(117);
  });
  test('should calculate life expectancy in Martian years', () => {
    expect(age.marsExpectancy).toEqual(38);
  });
  test('should calculate life expectancy in Jupiterian years', () => {
    expect(age.jupiterExpectancy).toEqual(6);
  });
  test('should compare age and expectancy, return difference', () => {
    expect(age.earthYearsLeft).toEqual(39);
    expect(age.mercuryYearsLeft).toEqual(163);
    expect(age.venusYearsLeft).toEqual(63);
    expect(age.marsYearsLeft).toEqual(20);
    expect(age.jupiterYearsLeft).toEqual(4);
  });
});