import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdStrengthBarComponent } from './pwd-strength-bar.component';

describe('PwdStrengthBarComponent', () => {
  let component: PwdStrengthBarComponent;
  let fixture: ComponentFixture<PwdStrengthBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwdStrengthBarComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PwdStrengthBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
