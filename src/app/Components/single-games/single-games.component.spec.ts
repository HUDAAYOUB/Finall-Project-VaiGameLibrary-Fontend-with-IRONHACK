import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGamesComponent } from './single-games.component';

describe('SingleGamesComponent', () => {
  let component: SingleGamesComponent;
  let fixture: ComponentFixture<SingleGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleGamesComponent]
    });
    fixture = TestBed.createComponent(SingleGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
