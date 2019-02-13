import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor(private router: Router) {}

  hoverclient = false;
  hovercandidate = false;

  goToCandidates() {
    setTimeout(() => {
    this.router.navigate(['/candidates']);
  }, 200);
  }

  goToClients() {
    this.router.navigate(['/clients']);
  }

mouseHoveringClient() {
    setTimeout(() => {
      this.hoverclient = true;
    }, 0);
  }

mouseLeavingClient() {
    setTimeout(() => {
      this.hoverclient = false;
    }, 0);
  }

mouseHoveringCandidate() {
    setTimeout(() => {
      this.hovercandidate = true;
    }, 0);
  }

mouseLeavingCandidate() {
    setTimeout(() => {
      this.hovercandidate = false;
    }, 0);
  }
  ngOnInit() {
  }

}
