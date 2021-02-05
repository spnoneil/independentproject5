export default class Age {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.earthExpectancy = 73;
  }

  calculateAge() {
    this.mercuryAge = Math.floor(this.earthAge / .24);
    this.venusAge = Math.floor(this.earthAge / .62);
    this.marsAge = Math.floor(this.earthAge / 1.88);
    this.jupiterAge = Math.floor(this.earthAge / 11.86);
  }

  lifeExpectancy() {
    this.mercuryExpectancy = Math.floor(this.earthExpectancy / .24);
    this.venusExpectancy = Math.floor(this.earthExpectancy / .62);
    this.marsExpectancy = Math.floor(this.earthExpectancy / 1.88);
    this.jupiterExpectancy = Math.floor(this.earthExpectancy / 11.86);
  }

  yearsLeft() {
    this.earthYearsLeft = this.earthExpectancy - this.earthAge;
    this.mercuryYearsLeft = this.mercuryExpectancy - this.mercuryAge;
    this.venusYearsLeft = this.venusExpectancy - this.venusAge;
    this.marsYearsLeft = this.marsExpectancy - this.marsAge;
    this.jupiterYearsLeft = this.jupiterExpectancy - this.jupiterAge;
  }

  yearsLeftNeg() {

  }
}