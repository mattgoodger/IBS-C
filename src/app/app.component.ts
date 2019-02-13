import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  title = 'IBS-C';
  hoverclient = false;
  hovercandidate = false;

  goToCandidates() {
    this.router.navigate(['/candidates']);
  }

  goToClients() {
    this.router.navigate(['/clients']);
  }

mouseHoveringClient() {
    setTimeout(() => {
      this.hoverclient = true;
    }, 600);
  }

mouseLeavingClient() {
    setTimeout(() => {
      this.hoverclient = false;
    }, 600);
  }

mouseHoveringCandidate() {
    setTimeout(() => {
      this.hovercandidate = true;
    }, 600);
  }

mouseLeavingCandidate() {
    setTimeout(() => {
      this.hovercandidate = false;
    }, 600);
  }
}
