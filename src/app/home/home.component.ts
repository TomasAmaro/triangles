import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Triangle } from './models/triangle.model';
import { TriangleTypes } from './models/triangle-types.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class  HomeComponent implements OnInit, AfterViewInit {

  public triangleForm: FormGroup;
  public sides: Array<FormControl> = new Array();
  public TriangleTypes: typeof TriangleTypes = TriangleTypes;
  public triangleType: TriangleTypes;

  constructor() {
    this.triangleForm = new FormGroup(this.setFormControls(3));
  }

  ngOnInit(): void {
      this.triangleForm.valueChanges.subscribe(value => this.triangleTypeChecker(value));
  }

  ngAfterViewInit(): void {
    this.triangleTypeChecker(this.triangleForm.value);
  }

  private setFormControls(quantity: number): any {
    const controlObj = {};
    for (let index = 0; index < quantity; index++) {
      controlObj[`side${index + 1}`] = this.setSideControl();
    }
    return controlObj;
  }

  private setSideControl(): FormControl {
    const sideControl = new FormControl(5);
    this.sides.push(sideControl);
    return sideControl;
  }

  private triangleTypeChecker (value: Triangle) {
    console.clear();
    if (this.isEquilateral(value)) {
      this.triangleType = TriangleTypes.Equilateral;
    } else {
      if (this.isScalene(value)) {
        this.triangleType = TriangleTypes.Scalene;
      } else {
        this.triangleType = TriangleTypes.Isosceles;
      }
    }
  }

  private isEquilateral(value: Triangle): boolean {
    return Object.values(value).every((side, i, arr) => arr[0] === side);
      }

  private isScalene(value: Triangle): boolean {
    // TODO: Find a cleaner way to do compare
    return value.side1 !== value.side2 && value.side3 !== value.side2 && value.side1 !== value.side3;      }
}


