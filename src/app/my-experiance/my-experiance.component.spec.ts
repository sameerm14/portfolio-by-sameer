import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExperianceComponent } from './my-experiance.component';

describe('MyExperianceComponent', () => {
  let component: MyExperianceComponent;
  let fixture: ComponentFixture<MyExperianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyExperianceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyExperianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
