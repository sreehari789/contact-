import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpateContactComponent } from './upate-contact.component';

describe('UpateContactComponent', () => {
  let component: UpateContactComponent;
  let fixture: ComponentFixture<UpateContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpateContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpateContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
