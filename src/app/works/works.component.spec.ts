import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiStub } from 'src/testing/testing';
import { ApiService } from '../services/api.service';

import { WorksComponent } from './works.component';

describe('WorksComponent', () => {
  let component: WorksComponent;
  let fixture: ComponentFixture<WorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksComponent ],
      providers: [
        {
          provide: ApiService,
          useValue: new ApiStub()
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
