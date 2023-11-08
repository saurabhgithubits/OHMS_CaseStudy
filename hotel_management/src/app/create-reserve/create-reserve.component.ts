import { Component, OnInit } from '@angular/core';
import { Reserve } from '../reserve';
import { ReserveService } from '../reserve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-reserve',
  templateUrl: './create-reserve.component.html',
  styleUrls: ['./create-reserve.component.css']
})
export class CreateReserveComponent implements OnInit {
  reserve: Reserve = new Reserve();
  constructor(private reservationService: ReserveService,private router:Router) { }

  ngOnInit(): void {
  }

  saveReserve(){
    this.reservationService.createReserve(this.reserve).subscribe( data =>{
      console.log(data);
      this.goToReserveList();
    },
      (    error: any) => console.log(error));
  }
  goToReserveList() {
    this.router.navigate(['/reserve']);
  }

  onSubmit()
  {
console.log(this.reserve);
this.saveReserve();

  }
}



