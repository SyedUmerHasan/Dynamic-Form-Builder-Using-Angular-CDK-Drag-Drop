import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatefieldsComponent } from './createfields.component';

describe('CreatefieldsComponent', () => {
  let component: CreatefieldsComponent;
  let fixture: ComponentFixture<CreatefieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatefieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatefieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
