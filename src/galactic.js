export default class Age {
  constructor(earth) {
    this.earth = earth;
    this.expectancy = 73;
  }

  calculateMercury() {
    const ageOnMercury = this.earth / .24;
    this.mercuryAge = Math.floor(ageOnMercury);
    return this.mercuryAge;
  }

  calculateVenus() {
    const ageOnVenus = this.earth / .62;
    this.venusAge = Math.floor(ageOnVenus);
    return this.venusAge;
  }

  calculateMars() {
    const ageOnMars = this.earth / 1.88;
    this.marsAge = Math.floor(ageOnMars);
    return this.marsAge;
  }

  calculateJupiter() {
    const ageOnJupiter = this.earth / 11.86;
    this.jupiterAge = Math.floor(ageOnJupiter);
    return this.jupiterAge;
  }

  lifeExpectancyMercury() {
    const mercury = this.expectancy / .24;
    return Math.floor(mercury);
  }

  lifeExpectancyVenus() {
    const venus = this.expectancy / .62;
    return Math.floor(venus);
  }

  lifeExpectancyMars() {
    const mars = this.expectancy / 1.88;
    return Math.floor(mars);
  }

  lifeExpectancyJupiter() {
    const jupiter = this.expectancy / 11.86;
    return Math.floor(jupiter);
  }
}