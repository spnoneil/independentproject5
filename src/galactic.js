export default class Age {
  constructor(earth) {
    this.earth = earth;
  }

  calculateMercury() {
    const ageOnMercury = this.earth / .24
    console.log(ageOnMercury)
    return Math.floor(ageOnMercury);
  }
}