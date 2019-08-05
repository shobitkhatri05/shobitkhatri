import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './events/events.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MeanComponent } from './mean/mean.component';
import { ProjectComponent } from './project/project.component';
import { QueryComponent } from './query/query.component';
import { ForumsComponent } from './forums/forums.component';
import { ResumeComponent } from './resume/resume.component';
import { ProfileComponent } from './profile/profile.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { ReportComponent } from './report/report.component';
import { LogoutComponent } from './logout/logout.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { ProjectenrollComponent } from './projectenroll/projectenroll.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { FormtwoComponent } from './formtwo/formtwo.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EventsComponent,
    SidebarComponent,
    MeanComponent,
    ProjectComponent,
    QueryComponent,
    ForumsComponent,
    ResumeComponent,
    ProfileComponent,
    SuggestionComponent,
    ReportComponent,
    LogoutComponent,
    ProjectlistComponent,
    ProjectdetailComponent,
    ProjectenrollComponent,
    ReadmoreComponent,
    FormtwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
