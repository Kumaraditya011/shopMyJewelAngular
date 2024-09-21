import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { CacheService } from '../services/cache.service';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {

  constructor(private cacheService: CacheService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Only cache GET requests
    if (request.method !== 'GET') {
      return next.handle(request);
    }

    // Check if the response is already cached
    const cachedResponse = this.cacheService.get(request.url);

    if (cachedResponse) {
      // Return the cached response
      return of(cachedResponse);
    }

    // If not cached, proceed with the request and cache the response
    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.cacheService.set(request.url, event); // Cache the response
        }
      })
    );
  }
}
