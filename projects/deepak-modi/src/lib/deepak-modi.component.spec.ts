import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepakModiComponent } from './deepak-modi.component';

describe('DeepakModiComponent', () => {
  let component: DeepakModiComponent;
  let fixture: ComponentFixture<DeepakModiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeepakModiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeepakModiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
