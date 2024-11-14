import { CanActivateFn } from '@angular/router';

import { getAuth } from 'firebase/auth';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  if (getAuth().currentUser !== null) {
    return true;
  } else {
    router.navigateByUrl('login');
    return false;
  }
};
