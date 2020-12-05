import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutqloansComponent } from './aboutqloans.component';

describe('AboutqloansComponent', () => {
  let component: AboutqloansComponent;
  let fixture: ComponentFixture<AboutqloansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutqloansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutqloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
