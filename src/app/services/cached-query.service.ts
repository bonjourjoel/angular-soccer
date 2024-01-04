import { Injectable } from '@angular/core';

interface CachedData<T> {
  timestamp: number;
  data: T;
}

@Injectable({
  providedIn: 'root',
})
export class CachedQueryService {
  private readonly DEFAULT_CACHE_DURATION_MS: number = 24 * 60 * 60 * 1000; // default: data is cached for 24 hours

  constructor() {}

  /**
   * Returns the result of a query, but uses a cache in the browser's local storage.
   * So executes the query only once every period P, or otherwise returns the cached data.
   */
  public async useCache<T>(
    queryKey: string,
    funReloadData: () => Promise<T>,
    cacheDurationMs: number = this.DEFAULT_CACHE_DURATION_MS
  ): Promise<T> {
    // try to load old data for the same query
    const strOldCachedData: string | null = localStorage.getItem(queryKey);
    if (strOldCachedData != null) {
      const oldCachedData: CachedData<T> = JSON.parse(strOldCachedData);
      // test if old data is not too old
      if (Date.now() - oldCachedData.timestamp <= cacheDurationMs) {
        // return old data
        return oldCachedData.data;
      }
    }

    // load new data
    console.log(`RELOAD DATA -> ${queryKey}`);
    const newData: T = await funReloadData();
    // save new data
    const newCachedData: CachedData<T> = {
      timestamp: Date.now(),
      data: newData,
    };
    const strNewCachedData: string = JSON.stringify(newCachedData);
    localStorage.setItem(queryKey, strNewCachedData);
    // return new data
    return newData;
  }
}
