import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor() { }
  @Input() dep:any;
  DepartmentId:string="";
  DepartmentName:string="";

  
  ngOnInit(): void {
  }
  
  
}
