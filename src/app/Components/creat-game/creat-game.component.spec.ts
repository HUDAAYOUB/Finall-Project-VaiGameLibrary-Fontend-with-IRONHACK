import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatGameComponent } from './creat-game.component';

describe('CreatGameComponent', () => {
  let component: CreatGameComponent;
  let fixture: ComponentFixture<CreatGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatGameComponent]
    });
    fixture = TestBed.createComponent(CreatGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
