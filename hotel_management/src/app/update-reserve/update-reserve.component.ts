import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReserveService } from '../reserve.service';
import { Reserve } from '../reserve';

@Component({
  selector: 'app-update-reserve',
  templateUrl: './update-reserve.component.html',
  styleUrls: ['./update-reserve.component.css']
})
export class UpdateReserveComponent {
  id!: number;
  reserve: Reserve = new Reserve();
  constructor(private reserveService: ReserveService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.reserveService.getReserveById(this.id).subscribe((data: any) => {
      this.reserve = data;
    }, (error: any) => console.log(error));
  }

  onSubmit(){
    this.reserveService.updateReserve(this.id, this.reserve).subscribe( data =>{
      this.goToReserveList();
    }
    , (error: any) => console.log(error));
  }

  goToReserveList(){
    this.router.navigate(['/reserve']);
  }
}
