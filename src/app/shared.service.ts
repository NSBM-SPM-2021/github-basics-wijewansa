import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:59808/api";


  constructor(private http:HttpClient) { }
  getTaskList():Observable<any[]>
  {
    return this.http.get<any>(this.APIUrl+'/TimeTable');
  }

  addTask(val:any){
    return this.http.post(this.APIUrl+'/TimeTable',val);
  }

  updateTask(val:any){
    return this.http.put(this.APIUrl+'/TimeTable',val);
  }

  deleteTask(val:any){
    return this.http.delete(this.APIUrl+'/TimeTable/'+val);
  }

  getAllTasks():Observable<any[]>
  {
    return this.http.get<any>(this.APIUrl+'/TimeTable/GetAllTasks');
  }
}
