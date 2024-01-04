import { Routes } from '@angular/router';
import { LeagueComponent } from './components/league/league.component';
import { AppSettingsService } from './services/app-settings.service';
import { League } from './models/league.interface';
import { Error404Component } from './components/error404/error404.component';

function getDefaultLeagueId(): number {
  const appSettingsService = new AppSettingsService(); // can't inject here
  const defaultLeagueId: number = appSettingsService.appSettings.leagues.find(
    (league: League) => league.isDefault
  )?.leagueId!;
  return defaultLeagueId;
}

export const routes: Routes = [
  { path: '', redirectTo: `league/${getDefaultLeagueId()}`, pathMatch: 'full' },
  { path: 'league/:leagueId', component: LeagueComponent },
  { path: '**', component: Error404Component },
];
