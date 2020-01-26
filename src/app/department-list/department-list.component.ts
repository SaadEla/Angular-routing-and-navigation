import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Department List
    </h3>
    <ul class="items">
      <li *ngFor="let department of departments" (click)="onSelect(department)">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
  </ul>
  `,
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {"id": 1, "name": "SAAD"},
    {"id": 2, "name": "CHAIMA"},
    {"id": 3, "name": "IBRAHIM"},
    {"id": 4, "name": "AMINA"},
    {"id": 5, "name": "ABDO"}
  ]
  constructor(private router: Router) { }

  onSelect(department) {
    this.router.navigate(['/departments', department.id]);
  }

  ngOnInit() {
  }

}
