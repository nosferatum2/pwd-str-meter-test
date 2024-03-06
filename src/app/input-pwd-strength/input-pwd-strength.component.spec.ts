import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPwdStrengthComponent } from './input-pwd-strength.component';

describe('InputPwdStrengthComponent', () => {
  let component: InputPwdStrengthComponent;
  let fixture: ComponentFixture<InputPwdStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPwdStrengthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputPwdStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
