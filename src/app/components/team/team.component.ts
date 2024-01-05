import { Component, Input, OnInit } from '@angular/core';
import { ApiFootballService } from '../../services/api-football.service';
import {
  ApiFixture,
  ApiResponseFixtures,
} from '../../models/api-football-datatypes.interface';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { Error404Component } from '../error404/error404.component';

@Component({
  selector: 'app-team',
  standalone: true,
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
  imports: [JsonPipe, Error404Component],
})
export class TeamComponent implements OnInit {
  fixtures?: Array<ApiFixture>;

  constructor(
    private apiFootballService: ApiFootballService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const teamId: number = Number(this.route.snapshot.paramMap.get('teamId'));
    this.apiFootballService
      .getTeamLastGames({ teamId: teamId })
      .then((apiResponseFixtures: ApiResponseFixtures) => {
        this.fixtures = apiResponseFixtures.response;
      });
  }

  historyGoBack() {
    history.back();
  }
}
