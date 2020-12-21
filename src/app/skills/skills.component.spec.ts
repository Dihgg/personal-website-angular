import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiStub } from 'src/testing/testing';
import { ApiService } from '../services/api.service';

import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsComponent ],
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
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
