import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { AppSettingsService } from './app-settings.service';
import { CachedQueryService } from './cached-query.service';
import {
  ApiResponseCommon,
  ApiResponseStandings,
} from '../models/api-football-datatypes.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiFootballService {
  constructor(
    private appSettingsService: AppSettingsService,
    private http: HttpClient,
    private cachedQueryService: CachedQueryService
  ) {}

  /**
   * Generic get query for https://www.api-football.com/documentation-v3, with cache
   */
  private async execGetQuery<T extends ApiResponseCommon>(
    url: string
  ): Promise<T> {
    console.log(`execGetQuery -> ${url}`);
    return this.cachedQueryService.useCache(url, async (): Promise<T> => {
      return new Promise<T>(
        (resolve: (value: T) => void, reject: (reason?: any) => void) => {
          this.http
            .get<T>(url, {
              headers: new HttpHeaders({
                'x-rapidapi-key': this.appSettingsService.appSettings.apiKey,
              }),
            })
            .pipe(catchError(this.handleError<T>(url)))
            .subscribe((data: T) => {
              if (data.errors.length > 0) {
                this.handleError(url)(
                  new Error('Api error response: ' + data.errors.join(' ; '))
                );
              }
              resolve(data);
            });
        }
      );
    });
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(
    operation = 'operation',
    result?: T
  ): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      // log error to console
      console.error(operation, error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /**
   * Get current season
   */
  private get currentSeason(): string {
    const now: Date = new Date();
    let year: number = now.getFullYear();
    if (now.getMonth() < 6) {
      // before july: current season is previous year
      year--;
    }
    return year.toString();
  }

  /**
   * Get standings: for a league, for the current season.
   */
  public async getLeagueStandings(args: {
    leagueId: number;
  }): Promise<ApiResponseStandings> {
    const url: string = `${this.appSettingsService.appSettings.apiBaseUrl}/standings?league=${args.leagueId}&season=${this.currentSeason}`;
    return this.execGetQuery<ApiResponseStandings>(url);
  }
}
