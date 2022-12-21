import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateComponent } from './certificate/certificate.component';
import { CvComponent } from './cv/cv.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: 'home' ,component:HomeComponent
  },

  {
    path: 'education', component:EducationComponent
  },

  {
    path: 'project' , component:ProjectComponent
  },

  {
    path: 'skills' , component:SkillsComponent
  },

  {
    path: 'certificate', component:CertificateComponent
  },

  {
    path: 'cv', component:CvComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
