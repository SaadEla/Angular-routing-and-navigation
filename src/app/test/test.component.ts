import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
  <div>
    <h2>{{date | date:'short'}}</h2>
    
  </div>

    `,
    styles: [`

  `]
})
export class TestComponent implements OnInit {
  public date = new Date(); 
  
  constructor() { }

  ngOnInit() {}



}

