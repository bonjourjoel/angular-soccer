import { League } from './league.interface';

export interface AppSettings {
  doLog: boolean;
  apiBaseUrl: string;
  apiKey: string;
  leagues: League[];
}
