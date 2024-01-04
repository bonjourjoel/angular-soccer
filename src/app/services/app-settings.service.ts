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
          isDefault: false,
        },
        {
          leagueId: 140,
          leagueName: 'La Liga',
          countryName: 'Spain',
          isDefault: false,
        },
        {
          leagueId: 78,
          leagueName: 'Bundesliga',
          countryName: 'Germany',
          isDefault: false,
        },
        {
          leagueId: 61,
          leagueName: 'Ligue 1',
          countryName: 'France',
          isDefault: true,
        },
        {
          leagueId: 135,
          leagueName: 'Serie A',
          countryName: 'Italy',
          isDefault: false,
        },
      ],
    };
  }
}
