import { TestBed, inject } from '@angular/core/testing';

import { TriangleService } from './triangle.service';
import { Triangle } from '../home/models/triangle.model';
import { TriangleTypes } from '../home/models/triangle-types.enum';

describe('TriangleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TriangleService]
    });
  });

  it('should be created', inject([TriangleService], (service: TriangleService) => {
    expect(service).toBeTruthy();
  }));

  it('should be a Scalene Triangle', inject([TriangleService], (service: TriangleService) => {
    expect(service.triangleTypeChecker(new Triangle(33, 55, 77))).toBe(TriangleTypes.Scalene);
  }));

  it('should not be a Scalene Triangle', inject([TriangleService], (service: TriangleService) => {
    expect(service.triangleTypeChecker(new Triangle(77, 55, 77))).not.toBe(TriangleTypes.Scalene);
  }));

  it('should be a Isosceles Triangle', inject([TriangleService], (service: TriangleService) => {
    expect(service.triangleTypeChecker(new Triangle(55, 55, 77))).toBe(TriangleTypes.Isosceles);
  }));

  it('should not be a Isosceles Triangle', inject([TriangleService], (service: TriangleService) => {
    expect(service.triangleTypeChecker(new Triangle(77, 66, 88))).not.toBe(TriangleTypes.Isosceles);
  }));

  it('should be a Equilateral Triangle', inject([TriangleService], (service: TriangleService) => {
    expect(service.triangleTypeChecker(new Triangle(77, 77, 77))).toBe(TriangleTypes.Equilateral);
  }));

  it('should not be a Equilateral Triangle', inject([TriangleService], (service: TriangleService) => {
    expect(service.triangleTypeChecker(new Triangle(77, 66, 88))).not.toBe(TriangleTypes.Equilateral);
  }));




});
