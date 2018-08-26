import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Triangle } from './models/triangle.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class  HomeComponent implements OnInit {
  public triangleForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.triangleForm = new FormGroup({
      sideOne: new FormControl(0),
      sideTwo: new FormControl(0),
      sideThree: new FormControl(0),
      });
      this.triangleForm.valueChanges.subscribe(value => this.valueChecker(value));
  }

  private valueChecker(value: Triangle): void {
    console.log(value);
    if (this.isScalene(value)) {
      console.log('Is Scalene!');
    }
    if (this.isIsosceles(value)) {
      console.log('Is isosceles');
    }
  }

  private isScalene(triangle: Triangle): boolean {
    return triangle.sideOne !== triangle.sideTwo && triangle.sideTwo !== triangle.sideThree && triangle.sideThree !== triangle.sideOne;
}

  private isIsosceles(triangle: Triangle): boolean {
    const values = Object.values(triangle);
    return values.map((side, index) => side === values[index + 1]).length >= 2;
}

}
