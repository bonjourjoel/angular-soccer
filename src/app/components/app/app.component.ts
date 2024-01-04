import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LeagueNavComponent } from '../league-nav/league-nav.component';
import { LeagueStandingsComponent } from '../league-standings/league-standings.component';
import { AppSettingsService } from '../../services/app-settings.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    LeagueNavComponent,
    LeagueStandingsComponent,
  ],
})
export class AppComponent implements OnInit {
  selectedLeagueId: number = 0;

  constructor(private appSettingsService: AppSettingsService) {}

  ngOnInit(): void {
    this.selectedLeagueId =
      this.appSettingsService.appSettings.leagues[0].leagueId;
  }
}
