import { TestBed } from '@angular/core/testing';

import { IEmployeeService } from './iemployee.service';

describe('IEmployeeService', () => {
  let service: IEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
