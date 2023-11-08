import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})

export class StaffListComponent implements OnInit {

  staffs: Staff[] = [];
  constructor(private staffService:StaffService){}

  ngOnInit(): void {
this.getStaffs();
  }
  private getStaffs(){
    this.staffService.getStaffList().subscribe((data: Staff[]) => {
      this.staffs = data;
    });
  }
 
}
