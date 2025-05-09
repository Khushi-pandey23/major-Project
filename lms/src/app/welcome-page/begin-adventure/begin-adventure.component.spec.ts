import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginAdventureComponent } from './begin-adventure.component';

describe('BeginAdventureComponent', () => {
  let component: BeginAdventureComponent;
  let fixture: ComponentFixture<BeginAdventureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeginAdventureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeginAdventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
