export class Stat {
  first_pair: string;
  second_pair: string;
  days_paired: number;
  percent: number;

  constructor(firt_pair, second_pair, days_paired, percent){
    this.first_pair = firt_pair;
    this.second_pair = second_pair;
    this.days_paired = days_paired;
    this.percent = percent;
  }

  getPair() {
    return this.first_pair + " & " +  this.second_pair;
  }
}
