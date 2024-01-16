import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HogeHogeComponent } from './hoge-hoge.component';

describe('HogeHogeComponent', () => {
  let component: HogeHogeComponent;
  let fixture: ComponentFixture<HogeHogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HogeHogeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HogeHogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
