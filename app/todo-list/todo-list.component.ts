import { Component,ElementRef, OnInit, ViewChild } from "@angular/core";
import {ToDoListService} from "./todo-list.service";
import {TextField} from "ui/text-field";

@Component({
    selector: 'todo-list',
    templateUrl: "todo-list/todo-list.component.html"
})

export class ToDoListComponent implements OnInit{
    activityList: Array<Object> = [];
    activity: string = "";
    @ViewChild("activityTextField") activityTextField: ElementRef;
    isLoading: boolean = false;
    listLoaded: boolean = false;    
    

    constructor(private todoListService: ToDoListService) {}

    ngOnInit() {
        this.isLoading = true;        
        this.todoListService.getAllToDos()
        .subscribe(toDos => {
          toDos.forEach((toDo) => {
            this.activityList.unshift(toDo);
          });
          this.isLoading = false;
          this.listLoaded = true;                        
        });
    }

    onAdd() {
        if (this.activity.trim() === "") {
          alert("Enter a ToDo");
          return;
        }
      
        // Dismiss the keyboard
        let textField = <TextField>this.activityTextField.nativeElement;
        textField.dismissSoftInput();

        this.isLoading = true;        
        this.todoListService.addToDo(this.activity)
          .subscribe(
            data => {
              this.activityList.unshift(data);
              this.activity = "";
              this.isLoading = false;
            },
            () => {
              alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
              });
              this.activity = "";
              this.isLoading = false;              
            }
          );
      }
}