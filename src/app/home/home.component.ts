import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TriangleTypes } from './models/triangle-types.enum';
import { TriangleService } from '../shared/triangle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class  HomeComponent implements OnInit {

  public triangleForm: FormGroup;
  public sides: Array<FormControl> = new Array();
  public TriangleTypes: typeof TriangleTypes = TriangleTypes;
  public triangleType: TriangleTypes;

  constructor(private triangleService: TriangleService) {
    this.triangleForm = new FormGroup(this.setFormControls(3));
  }

  ngOnInit(): void {
      this.triangleForm.valueChanges
      .subscribe(value => this.triangleType = this.triangleService.triangleTypeChecker(value));
      this.triangleType = this.triangleService.triangleTypeChecker(this.triangleForm.value);
  }

  private setFormControls(quantity: number): any {
    const controlObj = {};
    for (let index = 0; index < quantity; index++) {
      controlObj[`side${index + 1}`] = this.setSideControl();
    }
    return controlObj;
  }

  private setSideControl(): FormControl {
    const sideControl = new FormControl(200);
    this.sides.push(sideControl);
    return sideControl;
  }

}


