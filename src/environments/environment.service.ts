import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor(private http: HttpClient) { }

  loadEnvironmentConfig(): Promise<any> {
    const configUrl = './assets/env-config.json';
    return lastValueFrom(
      this.http.get(configUrl)
    ).then((config) => {
      // Merge the JSON file config with the default environment
      Object.assign(environment, config);
      return environment;
    }).catch((error) => {
      console.error('Error loading environment configuration:', error);
      throw new Error('Cannot load environment configuration...');
    });
  }

  // Optional: Method to manually set environment variables at runtime
  setEnvVariables(newEnv: any): void {
    Object.assign(environment, newEnv);
  }
}
