import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathNotFoundComponentComponent } from './path-not-found-component.component';

describe('PathNotFoundComponentComponent', () => {
  let component: PathNotFoundComponentComponent;
  let fixture: ComponentFixture<PathNotFoundComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PathNotFoundComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PathNotFoundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
