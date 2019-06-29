import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  
  public num1: number;
  public num2: number;
  public result: number;

  calculator_add()
  {
    this.result = this.num1 + this.num2;
  }

  calculator_subtract()
  {
    this.result = this.num1 - this.num2;
  }

  calculator_multiply()
  {
    this.result = this.num1 * this.num2;
  }

  calculator_divide()
  {
    this.result = this.num1 / this.num2;
  }

  constructor() { }

  ngOnInit() {
  }

}
