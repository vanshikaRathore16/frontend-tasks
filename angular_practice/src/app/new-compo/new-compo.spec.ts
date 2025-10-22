import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompo } from './new-compo';

describe('NewCompo', () => {
  let component: NewCompo;
  let fixture: ComponentFixture<NewCompo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCompo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCompo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
