"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var apiUrl = "https://hidden-wave-39973.herokuapp.com/api/todo";
var ToDoListService = (function () {
    function ToDoListService(http) {
        this.http = http;
    }
    ToDoListService.prototype.getAllToDos = function () {
        return this.http.get(apiUrl)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var activityList = [];
            data.Result.forEach(function (activity) {
                activityList.push({ "title": activity.title });
            });
            console.log("about to return");
            return activityList;
        })
            .catch(this.handleErrors);
    };
    ToDoListService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    ToDoListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ToDoListService);
    return ToDoListService;
}());
exports.ToDoListService = ToDoListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2RvLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsOEJBQXFDO0FBQ3JDLGlDQUErQjtBQUUvQixJQUFNLE1BQU0sR0FBRyxrREFBa0QsQ0FBQztBQUdsRTtJQUNJLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUU5QixDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7YUFDM0IsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ1AsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtnQkFDM0IsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztZQUMvQyxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUMvQixNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3RCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELHNDQUFZLEdBQVosVUFBYSxLQUFlO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUF0Qk0sZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUVpQixXQUFJO09BRHJCLGVBQWUsQ0F1QjNCO0lBQUQsc0JBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuY29uc3QgYXBpVXJsID0gXCJodHRwczovL2hpZGRlbi13YXZlLTM5OTczLmhlcm9rdWFwcC5jb20vYXBpL3RvZG9cIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvRG9MaXN0U2VydmljZXtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcblxuICAgIH1cblxuICAgIGdldEFsbFRvRG9zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChhcGlVcmwpXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC5tYXAoZGF0YSA9PiB7XG4gICAgICAgICAgbGV0IGFjdGl2aXR5TGlzdCA9IFtdO1xuICAgICAgICAgIGRhdGEuUmVzdWx0LmZvckVhY2goKGFjdGl2aXR5KSA9PiB7XG4gICAgICAgICAgICBhY3Rpdml0eUxpc3QucHVzaCh7XCJ0aXRsZVwiOiBhY3Rpdml0eS50aXRsZX0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWJvdXQgdG8gcmV0dXJuXCIpO1xuICAgICAgICAgIHJldHVybiBhY3Rpdml0eUxpc3Q7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgICB9XG4gICAgXG4gICAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gICAgICB9XG59Il19