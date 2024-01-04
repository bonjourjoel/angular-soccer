/**
 * Source: https://www.api-football.com/documentation-v3
 * Note: These interfaces only describe the datatypes partially, the same way they are used in the application.
 */

export interface ApiResponseCommon {
  errors: string[];
}

export interface ApiStanding {
  rank: number;
  team: {
    id: number;
    name: string;
    logo: string;
  };
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
