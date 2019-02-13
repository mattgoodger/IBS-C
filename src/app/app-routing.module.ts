import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesComponent } from './candidates/candidates.component';
import { ClientsComponent } from './clients/clients.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { PostjobComponent } from './postjob/postjob.component';

const routes: Routes = [
  { path: '', redirectTo: '/ibsc', pathMatch: 'full' },
  { path: 'candidates', component: CandidatesComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'ibsc', component: LandingpageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'postjob', component: PostjobComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ]
})
export class AppRoutingModule { }
