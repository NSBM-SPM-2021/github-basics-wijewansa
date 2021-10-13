import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

  constructor(private service:SharedService) { }
  TaskList:any=[];

  ModalTitle: any;
  ActivateAddEditTaskComp:boolean=false;
  task:any;


  ngOnInit(): void {

    this.refreshTaskList();
  }

  editClick(item: any){
    this.task=item;
    this.ModalTitle="Edit Task"
    this.ActivateAddEditTaskComp=true;

  }

  addClick(){
    this.task={
      TaskId:0,
      Title:"",
      //Weeek:"",
      SelectDate:"",
      SelectTime:"",
      Colour:0,
      Detail:""
    }
    this.ModalTitle="Add Task";
    this.ActivateAddEditTaskComp=true;
  }

  deleteClick(item: any){
   if(confirm('Are you sure?')){
     this.service.deleteTask(item.TaskId).subscribe(data=>{
       alert(data.toString());
       this.refreshTaskList();
     })
   } 
  }

  closeClick(){
    this.ActivateAddEditTaskComp=false;
    this.refreshTaskList();
  }

  refreshTaskList(){
    this.service.getTaskList().subscribe(data=>{
      this.TaskList=data;
    });
  
  }

}
