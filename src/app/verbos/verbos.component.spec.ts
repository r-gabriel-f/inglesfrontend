import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbosComponent } from './verbos.component';

describe('VerbosComponent', () => {
  let component: VerbosComponent;
  let fixture: ComponentFixture<VerbosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerbosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerbosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
