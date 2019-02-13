import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CandidatesComponent } from './candidates/candidates.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ClientsComponent } from './clients/clients.component';
import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { TruncatePipesModule } from 'angular-truncate-pipes';
import { FormsModule } from '@angular/forms';
import { JobFilterPipe } from './candidates/job-Filter.pipe';
import { PostjobComponent } from './postjob/postjob.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    LandingpageComponent,
    ClientsComponent,
    NotfoundComponent,
    AboutComponent,
    JobFilterPipe,
    PostjobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TruncatePipesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
