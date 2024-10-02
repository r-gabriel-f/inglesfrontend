import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbstenseComponent } from './verbstense.component';

describe('VerbstenseComponent', () => {
  let component: VerbstenseComponent;
  let fixture: ComponentFixture<VerbstenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerbstenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerbstenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
