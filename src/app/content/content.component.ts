import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  imgUrl = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png"
  constructor() { }

  ngOnInit(): void {
  }

}
