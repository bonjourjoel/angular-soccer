import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStandingsComponent } from './league-standings.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LeagueStandingsComponent', () => {
  let component: LeagueStandingsComponent;
  let fixture: ComponentFixture<LeagueStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeagueStandingsComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
