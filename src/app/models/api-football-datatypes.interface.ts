/**
 * Source: https://www.api-football.com/documentation-v3
 * Note: These interfaces only describe the api datatypes partially, the same way they are used in the application.
 */

export interface ApiResponseCommon {
  errors: any; // empty array if no error, otherwise some weird object
}

interface ApiTeam {
  id: number;
  name: string;
  logo: string;
}

export interface ApiStanding {
  rank: number;
  team: ApiTeam;
  points: number;
  goalsDiff: number;
  all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
  };
}

export interface ApiResponseStandings extends ApiResponseCommon {
  response: Array<{
    league: {
      standings: ApiStanding[][];
    };
  }>;
}

export interface ApiFixture {
  fixture: {
    id: number;
  };
  goals: {
    home: number;
    away: number;
  };
  teams: {
    home: ApiTeam;
    away: ApiTeam;
  };
}

export interface ApiResponseFixtures extends ApiResponseCommon {
  response: ApiFixture[];
}
