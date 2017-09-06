"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var todo_list_service_1 = require("./todo-list/todo-list.service");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "<page-router-outlet></page-router-outlet>",
            providers: [todo_list_service_1.ToDoListService]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsbUVBQThEO0FBTzlEO0lBQUE7SUFDQSxDQUFDO0lBRFksWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDJDQUEyQztZQUNyRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO1NBQzdCLENBQUM7T0FDVyxZQUFZLENBQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1RvRG9MaXN0U2VydmljZX0gZnJvbSBcIi4vdG9kby1saXN0L3RvZG8tbGlzdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGU6IFwiPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cIixcbiAgcHJvdmlkZXJzOiBbVG9Eb0xpc3RTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xufVxuIl19