import { Component, OnInit } from "@angular/core";
import {ToDoListService} from "./todo-list.service";
@Component({
    selector: 'todo-list',
    templateUrl: "todo-list/todo-list.component.html"
})

export class ToDoListComponent implements OnInit{
    activityList: Array<Object>;

    constructor(private todoListService: ToDoListService) {}

    ngOnInit() {
        this.todoListService.getAllToDos()
        .subscribe(toDos => {
          toDos.forEach((toDo) => {
            this.activityList.unshift(toDo);
            console.log("Done");
          });
        });
    }

    onAdd() {
        alert('hi');
    }
}