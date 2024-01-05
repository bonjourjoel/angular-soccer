import { ActivatedRoute } from '@angular/router';

export const ActivatedRouteTestingProvider: any = {
  provide: ActivatedRoute,
  useValue: {
    snapshot: {
      paramMap: {
        get: () => 1,
      },
    },
    paramMap: {
      subscribe: () => {},
    },
  },
};
