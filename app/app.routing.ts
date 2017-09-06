import {LoginComponent} from "./login/login.component";
import {ToDoListComponent} from "./todo-list/todo-list.component";

export const routes = [
    { 
        path: "", 
        component: LoginComponent 
    },
    { 
        path: "list", 
        component: ToDoListComponent
    }
];
  