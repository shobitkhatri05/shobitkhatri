import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './events/events.component';
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


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'events',component:EventsComponent},
  {path:'mean',component:MeanComponent},
  {path: 'project', component:ProjectComponent},
  {path:'query' , component:QueryComponent},
  {path: 'forums', component:ForumsComponent},
  {path: 'resume', component:ResumeComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'suggestion', component:SuggestionComponent},
  {path: 'report', component:ReportComponent},
  {path: 'logout', component:LogoutComponent},
  {path: 'projectlist', component:ProjectlistComponent},
  {path: 'projectdetail', component:ProjectdetailComponent},
  {path: 'projectenroll', component:ProjectenrollComponent },
  {path: 'readmore', component:ReadmoreComponent },
  {path: 'formtwo',component:FormtwoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
