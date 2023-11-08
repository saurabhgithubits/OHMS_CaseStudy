import { Injectable } from '@angular/core';
import { Staff } from './staff';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

 
  private baseURL = "http://localhost:8085/hms/v2/staff";

  constructor(private httpClient: HttpClient) { }
  
  getStaffList(): Observable<Staff[]>{
    return this.httpClient.get<Staff[]>(`${this.baseURL}`);
  }
}
