import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';//importi

@Component({
  selector: 'app-department-detail',
  template: `
    <h2>Department Detail</h2>   
      <h3>you've selected {{ departmentId}}</h3>
      <p>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
    </p>
  `,
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { } //injecter

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {//f blasst snapshot derna paramMap
      let id = parseInt(params.get('id'));
      this.departmentId = id;

    });
  }
  goPrevious(){
    let previousId = this.departmentId + 1;
    this.router.navigate(['/departments', previousId]);
  }
  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

}
