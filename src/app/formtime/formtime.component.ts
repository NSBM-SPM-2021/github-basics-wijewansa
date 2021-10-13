import { Component, OnInit, Input } from '@angular/core'; 
//import { RequiredValidator, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-formtime',
  templateUrl: './formtime.component.html',
  styleUrls: ['./formtime.component.css']
})
export class FormtimeComponent implements OnInit {

  constructor(private service:SharedService){}

  @Input() task1:any;
  TaskId: any;
  Title: any;
  Weeek: any;
  SelectDate: any;
  SelectTime: any;
  Colour: any;
  Detail: any;

  ngOnInit(): void {
    this.TaskId=this.task1.TaskId;
    this.Title=this.task1.Title;
    //this.Weeek=this.task.Weeek;
    this.SelectDate=this.task1.SelectDate;
    this.SelectTime=this.task1.SelectTime;
    //this.Colour=this.task.Colour;
    this.Detail=this.task1.Detail;

    
  }

  addTask(){
     var val = {TaskId:this.TaskId,
              Title:this.Title,
              //Weeek:this.Weeek,
              SelectDate:this.SelectDate,
              SelectTime:this.SelectTime,
              Colour:this.Colour,
              Detail:this.Detail
            }
    this.service.addTask(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}


