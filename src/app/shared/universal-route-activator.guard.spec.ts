import { TestBed, async, inject } from '@angular/core/testing';

import { UniversalRouteActivatorGuard } from './universal-route-activator.guard';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../auth/__services__/auth.service';
import { CookieService } from '../auth/__services__/ngx-cookie-service.service';

describe('UniversalRouteActivatorGuard', () => {
  const mockAuthService = {
    andelaAuthServiceToken: '',
    isAuthorized: '',
    isAuthenticated: '',
    currentUser: {},
    login: (): Observable<any> => {
      return of({
        data: {
          isAuthorized: true
        }
      });
    },
    setCurrentUser: (): void => { },
    initClock: (): void => { },
    authorizeUser: (): void => { },
    unAuthorizeUser: (): void => { }
  };

  const mockCookieService = {
    get: () => 'token'
  }

  const mockRouter = {
    navigate: () => { }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UniversalRouteActivatorGuard,
        { provide: Router, useValue: mockRouter },
        { provide: AuthService, useValue: mockAuthService },
        { provide: CookieService, useValue: mockCookieService },
      ]
    });
  });

  it('should ...', inject([UniversalRouteActivatorGuard], (guard: UniversalRouteActivatorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
