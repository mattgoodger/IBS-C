import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  jobs: Observable<any>[];
  searchTerm: string;

  constructor(private router: Router, private data: DataService, private http: HttpClient) { }


  ngOnInit() {
   // this.jobs = this.http.get('192.168.1.130:3000/posts');

   this.data.getJobs().subscribe((res: any[]) => {
    this.jobs = res;
    });
  }

  createJob() {
    this.router.navigate(['/postjob']);
  }



}
