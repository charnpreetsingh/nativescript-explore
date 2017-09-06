"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var todo_list_service_1 = require("./todo-list.service");
var ToDoListComponent = (function () {
    function ToDoListComponent(todoListService) {
        this.todoListService = todoListService;
    }
    ToDoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoListService.getAllToDos()
            .subscribe(function (toDos) {
            toDos.forEach(function (toDo) {
                _this.activityList.unshift(toDo);
                console.log("Done");
            });
        });
    };
    ToDoListComponent.prototype.onAdd = function () {
        alert('hi');
    };
    ToDoListComponent = __decorate([
        core_1.Component({
            selector: 'todo-list',
            templateUrl: "todo-list/todo-list.component.html"
        }),
        __metadata("design:paramtypes", [todo_list_service_1.ToDoListService])
    ], ToDoListComponent);
    return ToDoListComponent;
}());
exports.ToDoListComponent = ToDoListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvZG8tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQseURBQW9EO0FBTXBEO0lBR0ksMkJBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFFeEQsb0NBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUU7YUFDakMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNkLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO2dCQUNqQixLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGlDQUFLLEdBQUw7UUFDSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQWpCUSxpQkFBaUI7UUFMN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSxvQ0FBb0M7U0FDcEQsQ0FBQzt5Q0FLdUMsbUNBQWU7T0FIM0MsaUJBQWlCLENBa0I3QjtJQUFELHdCQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtUb0RvTGlzdFNlcnZpY2V9IGZyb20gXCIuL3RvZG8tbGlzdC5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RvZG8tbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6IFwidG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuaHRtbFwiXG59KVxuXG5leHBvcnQgY2xhc3MgVG9Eb0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgYWN0aXZpdHlMaXN0OiBBcnJheTxPYmplY3Q+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0b2RvTGlzdFNlcnZpY2U6IFRvRG9MaXN0U2VydmljZSkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnRvZG9MaXN0U2VydmljZS5nZXRBbGxUb0RvcygpXG4gICAgICAgIC5zdWJzY3JpYmUodG9Eb3MgPT4ge1xuICAgICAgICAgIHRvRG9zLmZvckVhY2goKHRvRG8pID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlMaXN0LnVuc2hpZnQodG9Ebyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRvbmVcIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQWRkKCkge1xuICAgICAgICBhbGVydCgnaGknKTtcbiAgICB9XG59Il19