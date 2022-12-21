import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  


skill:any=[{
  'courses':'',
  'name':'ANGULAR',
  'DEF':'Angular is a framework for building single-page client applications using HTML and TypeScript.Angular is written in TypeScript',
  'url':'https://www.w3schools.com/angular/'
},
{
  'courses':'',
  'name':'Web designing',
  'DEF':'Web design is the creation of websites and pages to reflect a company brand and information and ensure a user-friendly experience.',
  'url':'https://www.w3schools.com/html/'
},
{
  'courses':'',
  'name':'SQL',
  'DEF':' SQL stands for Structured Query Language. SQL lets you access and manipulate databases.',
  'url':'https://www.w3schools.com/sql/'
},


]



}
