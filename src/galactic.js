export default class Age {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.earthExpectancy = 73;
  }

  calculateAge() {
    const ageOnMercury = this.earthAge / .24;
    this.mercuryAge = Math.floor(ageOnMercury);
    const ageOnVenus = this.earthAge / .62;
    this.venusAge = Math.floor(ageOnVenus);
    const ageOnMars = this.earthAge / 1.88;
    this.marsAge = Math.floor(ageOnMars);
    const ageOnJupiter = this.earthAge / 11.86;
    this.jupiterAge = Math.floor(ageOnJupiter);
  }

  lifeExpectancy() {
    const mercury = this.earthExpectancy / .24;
    this.mercuryExpectancy = Math.floor(mercury);
    const venus = this.earthExpectancy / .62;
    this.venusExpectancy = Math.floor(venus);
    const mars = this.earthExpectancy / 1.88;
    this.marsExpectancy = Math.floor(mars);
    const jupiter = this.earthExpectancy / 11.86;
    this.jupiterExpectancy = Math.floor(jupiter);
  }

  // lifeExpectancyMercury() {
  //   const mercury = this.earthExpectancy / .24;
  //   return Math.floor(mercury);
  // }

  // lifeExpectancyVenus() {
  //   const venus = this.expectancy / .62;
  //   return Math.floor(venus);
  // }

  // lifeExpectancyMars() {
  //   const mars = this.expectancy / 1.88;
  //   return Math.floor(mars);
  // }

  // lifeExpectancyJupiter() {
  //   const jupiter = this.expectancy / 11.86;
  //   return Math.floor(jupiter);
  // }

  calculateExpectancy() {

  }
}