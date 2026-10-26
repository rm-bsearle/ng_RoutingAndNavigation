import { CanActivateFn, Router } from '@angular/router';
import { HOME_ROUTE } from './app.routes';
import { inject } from '@angular/core';
import { FeatureFlagService } from './services/feature-flag.service';
import { map } from 'rxjs';

export const isPizzaEnabledCanActivateGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const flagService = inject(FeatureFlagService)
  return flagService.isPizzaFeatureEnabled$.pipe(
    map(isEnabled => {
      return isEnabled ? true : router.createUrlTree([HOME_ROUTE]);
    })
  );
};
