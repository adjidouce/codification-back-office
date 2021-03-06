import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatimentComponent } from './batiment.component';

describe('BatimentComponent', () => {
  let component: BatimentComponent;
  let fixture: ComponentFixture<BatimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
