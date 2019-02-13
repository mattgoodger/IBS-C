import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { async } from 'q';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  jobs: Observable<any[]>;
  baseUrl: '192.168.1.130:3000';

  constructor(private http: HttpClient, private router: Router) { }

getJobs() {
  return this.http.get('http://192.168.1.130:3000/posts');

}
}
