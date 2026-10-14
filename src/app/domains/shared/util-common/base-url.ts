import { inject, InjectionToken } from '@angular/core';

import { ConfigService } from './config-service';

export const BASE_URL = new InjectionToken<string>('BASE_URL', {
  providedIn: 'root',
  factory: () => inject(ConfigService).baseUrl,
});
