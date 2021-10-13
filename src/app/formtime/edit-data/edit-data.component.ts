import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {

  constructor(private service:SharedService) { }

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
    this.Weeek=this.task.Weeek;
    this.SelectDate=this.task.SelectDate;
    this.SelectTime=this.task.SelectTime;
    this.Colour=this.task.Colour;
    this.Detail=this.task.Detail;
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

  updateTask(){
    var val = {TaskId:this.TaskId,
      Title:this.Title,
      //Weeek:this.Weeek,
      SelectDate:this.SelectDate,
      SelectTime:this.SelectTime,
      Colour:this.Colour,
      Detail:this.Detail
    }
this.service.updateTask(val).subscribe(res=>{
alert(res.toString());
});
  }

}
