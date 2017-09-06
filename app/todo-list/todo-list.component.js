"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var todo_list_service_1 = require("./todo-list.service");
var ToDoListComponent = (function () {
    function ToDoListComponent(todoListService) {
        this.todoListService = todoListService;
        this.activityList = [];
        this.activity = "";
        this.isLoading = false;
        this.listLoaded = false;
    }
    ToDoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.todoListService.getAllToDos()
            .subscribe(function (toDos) {
            toDos.forEach(function (toDo) {
                _this.activityList.unshift(toDo);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
        });
    };
    ToDoListComponent.prototype.onAdd = function () {
        var _this = this;
        if (this.activity.trim() === "") {
            alert("Enter a ToDo");
            return;
        }
        // Dismiss the keyboard
        var textField = this.activityTextField.nativeElement;
        textField.dismissSoftInput();
        this.isLoading = true;
        this.todoListService.addToDo(this.activity)
            .subscribe(function (data) {
            _this.activityList.unshift(data);
            _this.activity = "";
            _this.isLoading = false;
        }, function () {
            alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
            });
            _this.activity = "";
            _this.isLoading = false;
        });
    };
    __decorate([
        core_1.ViewChild("activityTextField"),
        __metadata("design:type", core_1.ElementRef)
    ], ToDoListComponent.prototype, "activityTextField", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvZG8tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0U7QUFDeEUseURBQW9EO0FBUXBEO0lBUUksMkJBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVBwRCxpQkFBWSxHQUFrQixFQUFFLENBQUM7UUFDakMsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUV0QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVUsR0FBWSxLQUFLLENBQUM7SUFHMkIsQ0FBQztJQUV4RCxvQ0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRTthQUNqQyxTQUFTLENBQUMsVUFBQSxLQUFLO1lBQ2QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7Z0JBQ2pCLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsaUNBQUssR0FBTDtRQUFBLGlCQTJCRztRQTFCQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCx1QkFBdUI7UUFDdkIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztRQUNoRSxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ3hDLFNBQVMsQ0FDUixVQUFBLElBQUk7WUFDRixLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNuQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLEVBQ0Q7WUFDRSxLQUFLLENBQUM7Z0JBQ0osT0FBTyxFQUFFLHNEQUFzRDtnQkFDL0QsWUFBWSxFQUFFLElBQUk7YUFDbkIsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbkIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDO0lBOUM2QjtRQUEvQixnQkFBUyxDQUFDLG1CQUFtQixDQUFDO2tDQUFvQixpQkFBVTtnRUFBQztJQUhyRCxpQkFBaUI7UUFMN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSxvQ0FBb0M7U0FDcEQsQ0FBQzt5Q0FVdUMsbUNBQWU7T0FSM0MsaUJBQWlCLENBa0Q3QjtJQUFELHdCQUFDO0NBQUEsQUFsREQsSUFrREM7QUFsRFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7VG9Eb0xpc3RTZXJ2aWNlfSBmcm9tIFwiLi90b2RvLWxpc3Quc2VydmljZVwiO1xuaW1wb3J0IHtUZXh0RmllbGR9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndG9kby1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogXCJ0b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5odG1sXCJcbn0pXG5cbmV4cG9ydCBjbGFzcyBUb0RvTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBhY3Rpdml0eUxpc3Q6IEFycmF5PE9iamVjdD4gPSBbXTtcbiAgICBhY3Rpdml0eTogc3RyaW5nID0gXCJcIjtcbiAgICBAVmlld0NoaWxkKFwiYWN0aXZpdHlUZXh0RmllbGRcIikgYWN0aXZpdHlUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XG4gICAgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGlzdExvYWRlZDogYm9vbGVhbiA9IGZhbHNlOyAgICBcbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdG9kb0xpc3RTZXJ2aWNlOiBUb0RvTGlzdFNlcnZpY2UpIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlOyAgICAgICAgXG4gICAgICAgIHRoaXMudG9kb0xpc3RTZXJ2aWNlLmdldEFsbFRvRG9zKClcbiAgICAgICAgLnN1YnNjcmliZSh0b0RvcyA9PiB7XG4gICAgICAgICAgdG9Eb3MuZm9yRWFjaCgodG9EbykgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3Rpdml0eUxpc3QudW5zaGlmdCh0b0RvKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMubGlzdExvYWRlZCA9IHRydWU7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQWRkKCkge1xuICAgICAgICBpZiAodGhpcy5hY3Rpdml0eS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICBhbGVydChcIkVudGVyIGEgVG9Eb1wiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAvLyBEaXNtaXNzIHRoZSBrZXlib2FyZFxuICAgICAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD50aGlzLmFjdGl2aXR5VGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRleHRGaWVsZC5kaXNtaXNzU29mdElucHV0KCk7XG5cbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlOyAgICAgICAgXG4gICAgICAgIHRoaXMudG9kb0xpc3RTZXJ2aWNlLmFkZFRvRG8odGhpcy5hY3Rpdml0eSlcbiAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlMaXN0LnVuc2hpZnQoZGF0YSk7XG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZpdHkgPSBcIlwiO1xuICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgYWRkaW5nIGFuIGl0ZW0gdG8geW91ciBsaXN0LlwiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLmFjdGl2aXR5ID0gXCJcIjtcbiAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICB9XG59Il19