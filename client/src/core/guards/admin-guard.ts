import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountService } from '../services/account-service';
import { ToastService } from '../services/toast-service';

export const adminGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService)
  const tosat = inject(ToastService)

  if (accountService.currentUser()?.roles.includes('Admin') 
    || accountService.currentUser()?.roles.includes('Moderator')) {
      return true
  } else {
    tosat.error('Enter this area, you cannot')
    return false
  }
};
