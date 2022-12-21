import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  courses:any=[{
    
      'name':'Angular:-Ganpati Pandal',
      'subject':'Angular:-Rental Housing Website',
      'subjectt':'Angular:-Resume of Vikas Gupta',
      'title':'Angular:-Registration Form',
      'titlee':'Angular:-Simple Calculator'
  },
  {
    'name':'Webdesigning:-India Cultural',
    'subject':'Webdesigning:-Calculator Using HTML,CSS,JAVASCRIPT',
    'subjectt':'Webdesigning:-Login form using HTML,CSS'
  },
  {
    'name':'Sql:-Database of Blood Donation',
    'subject':'Sql:-Student fees Management system',
    'subjectt':'Sql:-Employee managment system'
  },
{
    'name':'Python:-Tracking Location Using Python',
    'subject':'Python:-Delete Update insert Using Flask and HTML in Python with database connectivity using Sql',
    'subjectt':''
}
  
]
}
