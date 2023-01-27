import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogemployeeboxComponent } from './dialogemployeebox.component';

describe('DialogemployeeboxComponent', () => {
  let component: DialogemployeeboxComponent;
  let fixture: ComponentFixture<DialogemployeeboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogemployeeboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogemployeeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
