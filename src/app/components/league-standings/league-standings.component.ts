import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ApiFootballService } from '../../services/api-football.service';
import { CommonModule } from '@angular/common';
import {
  ApiResponseStandings,
  ApiStanding,
} from '../../models/api-football-datatypes.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-league-standings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './league-standings.component.html',
  styleUrl: './league-standings.component.css',
})
export class LeagueStandingsComponent implements OnChanges {
  @Input() leagueId!: number;
  standings?: Array<ApiStanding>;

  constructor(private apiFootballService: ApiFootballService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.apiFootballService
      .getLeagueStandings({ leagueId: this.leagueId })
      .then((apiStandingsResponse: ApiResponseStandings) => {
        this.standings = apiStandingsResponse.response[0].league.standings[0];
      });
  }
}
