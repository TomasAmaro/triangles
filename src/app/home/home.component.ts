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
  public sides: Array<FormControl> = new Array();

  constructor() {
    this.triangleForm = new FormGroup(this.setFormControls(3));
  }

  ngOnInit() {
      this.triangleForm.valueChanges.subscribe(value => this.valueChecker(value));
  }

  private setFormControls(quantity: number): any {
    const controlObj = {};
    for (let index = 0; index < quantity; index++) {
      controlObj[`side${index + 1}`] = this.setSideControl();
    }
    return controlObj;
  }

  private setSideControl(): FormControl {
    const sideControl = new FormControl(0);
    this.sides.push(sideControl);
    return sideControl;
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
    return triangle.side1 !== triangle.side2 && triangle.side2 !== triangle.side3 && triangle.side3 !== triangle.side1;
}

  private isIsosceles(triangle: Triangle): boolean {
    const values = Object.values(triangle);
    return values.map((side, index) => side === values[index + 1]).length >= 2;
}

}
