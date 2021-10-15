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

  @Input() task:any;
  TaskId: any;
  Title: any;
  Weeek: any;
  SelectDate: any;
  SelectTime: any;
  Colour: any;
  Detail: any;

  ngOnInit(): void {
    this.TaskId=this.task.TaskId;
    this.Title=this.task.Title;
    //this.Weeek=this.task.Weeek;
    this.SelectDate=this.task.SelectDate;
    this.SelectTime=this.task.SelectTime;
    //this.Colour=this.task.Colour;
    this.Detail=this.task.Detail;

    
  }

  addTask(){
     var val1 = {TaskId:this.TaskId,
              Title:this.Title,
              //Weeek:this.Weeek,
              SelectDate:this.SelectDate,
              SelectTime:this.SelectTime,
              Colour:this.Colour,
              Detail:this.Detail
            }
    this.service.addTask(val1).subscribe(res=>{
      alert(res.toString());
    });
  }

}


