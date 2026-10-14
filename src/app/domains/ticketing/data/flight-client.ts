import { httpResource } from '@angular/common/http';
import { inject, Service, Signal } from '@angular/core';

import { BASE_URL } from '../../shared/util-common/base-url';
import { Flight } from './flight';

@Service()
export class FlightClient {
  private readonly baseUrl = inject(BASE_URL);

  findResource(from: Signal<string>, to: Signal<string>) {
    return httpResource<Flight[]>(
      () => {
        if (!from() || !to()) {
          return undefined;
        }

        return {
          url: `${this.baseUrl}/flight`,
          params: {
            from: from(),
            to: to(),
          },
        };
      },
      { defaultValue: [] },
    );
  }
}
