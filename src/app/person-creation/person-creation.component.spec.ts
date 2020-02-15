import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCreationComponent } from './person-creation.component';

describe('PersonCreationComponent', () => {
  let component: PersonCreationComponent;
  let fixture: ComponentFixture<PersonCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
