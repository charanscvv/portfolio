import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [{
  path: '', children: [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
      path: 'home', component: HomeComponent
    },
    {
      path: 'projects', component: ProjectsComponent
    },
    {
      path: 'skills', component: SkillsComponent
    },
    {
      path: 'interests', component: InterestsComponent
    },
    {
      path: 'contactus', component: ContactusComponent
    }
    // ,
    // {
    //   path: 'easteregg', component: HomeComponent
    // }
  ]
}];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
