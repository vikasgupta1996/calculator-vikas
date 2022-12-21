import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
education:any=[
  {
    'image':'/assets/img/edu1.jpg'
  },

  {
    'image':'/assets/img/edu5.jpg'
  },

  {
    'image':'/assets/img/edu11.webp'
  }
  
]

}
