import { Component } from '@angular/core';

@Component (
  {
    selector: 'app-categorymenu',
    templateUrl: './categorymenu.component.html',
    styleUrls: ['./categorymenu.component.css']
  }
)

export class categoryMenuComponent {
  category: String[] = ['Electonic', 'Life Style', 'Game Center', 'Travel'];
}
