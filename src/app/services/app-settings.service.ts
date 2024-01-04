import { Injectable } from '@angular/core';
import { League } from '../models/league.interface';
import { AppSettings } from '../models/app-settings.interface';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {
  constructor() {}

  public get appSettings(): AppSettings {
    return {
      doLog: true,
      apiBaseUrl: 'https://v3.football.api-sports.io',
      apiKey: 'd473f023b118d5f2c55b742796ec1980',
      leagues: [
        {
          leagueId: 39,
          leagueName: 'Premier League',
          countryName: 'England',
        },
        {
          leagueId: 140,
          leagueName: 'La Liga',
          countryName: 'Spain',
        },
        {
          leagueId: 78,
          leagueName: 'Bundesliga',
          countryName: 'Germany',
        },
        {
          leagueId: 61,
          leagueName: 'Ligue 1',
          countryName: 'France',
        },
        {
          leagueId: 135,
          leagueName: 'Serie A',
          countryName: 'Italy',
        },
      ],
    };
  }
}
