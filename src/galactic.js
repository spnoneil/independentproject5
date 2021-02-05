export default class Age {
  constructor(earth) {
    this.earth = earth;
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
    return Math.floor(ageOnMars)
  }
}