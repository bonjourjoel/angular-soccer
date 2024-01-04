import { Component, OnInit } from '@angular/core';
import { LeagueNavComponent } from '../league-nav/league-nav.component';
import { LeagueStandingsComponent } from '../league-standings/league-standings.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AppSettingsService } from '../../services/app-settings.service';
import { League } from '../../models/league.interface';
import { Error404Component } from '../error404/error404.component';

@Component({
  selector: 'app-league',
  standalone: true,
  templateUrl: './league.component.html',
  styleUrl: './league.component.css',
  imports: [LeagueNavComponent, LeagueStandingsComponent, Error404Component],
})
export class LeagueComponent {
  leagueId?: number;

  constructor(
    private appSettingsService: AppSettingsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe((paramMap) => {
      this.leagueId = Number(paramMap.get('leagueId'));
      // check that id is allowed
      if (
        !this.appSettingsService.appSettings.leagues.some(
          (league: League) => league.leagueId == this.leagueId
        )
      ) {
        this.leagueId = undefined;
      }
    });
  }

  onselectedLeagueIdChange(selectedLeagueId: number) {
    this.router.navigate(['/league', selectedLeagueId]);
  }
}
