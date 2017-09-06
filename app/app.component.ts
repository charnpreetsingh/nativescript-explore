import { Component } from "@angular/core";
import {ToDoListService} from "./todo-list/todo-list.service";

@Component({
  selector: "my-app",
  template: "<page-router-outlet></page-router-outlet>",
  providers: [ToDoListService]
})
export class AppComponent {
}
