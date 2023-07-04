class price {
    constructor (day1, day2, day3){
      this.day1 = day1;
      this.day2 = day2;
      this.day3= day3;
  }
  }
  var Uber = new price (15,20,25);
  var sum = (Uber.day1+Uber.day2+Uber.day3)
  console.log(sum);