import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchpipePipe } from '../searchpipe/searchpipe.pipe';

import { EmployeedataComponent } from './employeedata.component';

describe('EmployeedataComponent', () => {
  let component: EmployeedataComponent;
  let fixture: ComponentFixture<EmployeedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        
      ], 
      declarations: [ 
        EmployeedataComponent,
        SearchpipePipe 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
