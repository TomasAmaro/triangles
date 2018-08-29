import { Injectable } from '@angular/core';
import { Triangle } from 'src/app/home/models/triangle.model';
import { TriangleTypes } from 'src/app/home/models/triangle-types.enum';

@Injectable({
  providedIn: 'root'
})
export class TriangleService {

  constructor() { }

  public triangleTypeChecker(value: Triangle): TriangleTypes {
    if (this.isEquilateral(value)) {
      return TriangleTypes.Equilateral;
    } else {
      if (this.isScalene(value)) {
        return TriangleTypes.Scalene;
      } else {
        return TriangleTypes.Isosceles;
      }
    }
  }

  private isEquilateral(value: Triangle): boolean {
    return Object.values(value).every((side, i, arr) => arr[0] === side);
  }

  private isScalene(value: Triangle): boolean {
    // TODO: Find a cleaner way to compare but this actully looks more efficient
    return value.side1 !== value.side2 && value.side3 !== value.side2 && value.side1 !== value.side3;
  }
}
