import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppSettingsService } from '../../services/app-settings.service';
import { League } from '../../models/league.interface';

@Component({
  selector: 'app-league-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './league-nav.component.html',
  styleUrl: './league-nav.component.css',
})
export class LeagueNavComponent {
  @Input() selectedLeagueId: number = 0;
  @Output() selectedLeagueIdChange = new EventEmitter<number>();

  constructor(private appSettingsService: AppSettingsService) {}

  get appLeagues(): League[] {
    return this.appSettingsService.appSettings.leagues;
  }

  onSelectedLeagueIdChange(leagueId: number): void {
    this.selectedLeagueId = leagueId;
    this.selectedLeagueIdChange.emit(this.selectedLeagueId);
  }
}
