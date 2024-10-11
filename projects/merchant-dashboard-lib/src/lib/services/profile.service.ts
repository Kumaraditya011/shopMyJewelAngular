import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwOGY5Yzc3MjBjMGU3NzYzYjRjNmM5In0sImlhdCI6MTcyODY0MTQ3OSwiZXhwIjoxNzI5MDAxNDc5fQ.QF8UAQZc5mq2BNxHM4EjQvEM_YpgeNZTOMqO3xvrlUM"
baseUrl=' https://87c1-49-207-202-189.ngrok-free.app'
  constructor( public http: HttpClient,) { }

  updateProfileData(data: any) {
    let id = '6708f9c7720c0e7763b4c6c9';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`, 
      'Content-Type': 'application/json'       
    });
    return this.http.put(`${this.baseUrl}/api/merchants/${id}`, data, { headers })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
