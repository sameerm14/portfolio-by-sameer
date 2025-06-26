import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCertificationsComponent } from './my-certifications.component';

describe('MyCertificationsComponent', () => {
  let component: MyCertificationsComponent;
  let fixture: ComponentFixture<MyCertificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCertificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
