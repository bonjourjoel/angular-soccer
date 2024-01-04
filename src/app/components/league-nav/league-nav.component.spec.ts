import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueNavComponent } from './league-nav.component';

describe('LeagueNavComponent', () => {
  let component: LeagueNavComponent;
  let fixture: ComponentFixture<LeagueNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeagueNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
