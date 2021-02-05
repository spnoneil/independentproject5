export default class Age {
  constructor(earth) {
    this.earth = earth;
    this.expectancy = 73;
  }

  calculateMercury() {
    const ageOnMercury = this.earth / .24;
    return Math.floor(ageOnMercury);
  }

  calculateVenus() {
    const ageOnVenus = this.earth / .62;
    return Math.floor(ageOnVenus);
  }

  calculateMars() {
    const ageOnMars = this.earth / 1.88;
    return Math.floor(ageOnMars);
  }

  calculateJupiter() {
    const ageOnJupiter = this.earth / 11.86;
    return Math.floor(ageOnJupiter);
  }

  lifeExpectancyMercury() {
    const mercury = this.expectancy / .24;
    return Math.floor(mercury)
  }

  lifeExpectancyVenus() {
    const venus = this.expectancy / .62;
    return Math.floor(venus)
  }

  lifeExpectancyMars() {
    const mars = this.expectancy / 1.88;
    return Math.floor(mars)
  }
}