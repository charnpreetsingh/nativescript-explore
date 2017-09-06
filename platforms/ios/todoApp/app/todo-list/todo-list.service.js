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
            data.forEach(function (activity) {
                activityList.push({ "title": activity.title });
            });
            return activityList;
        })
            .catch(this.handleErrors);
    };
    ToDoListService.prototype.addToDo = function (name) {
        var request = { "title": name };
        return this.http.post(apiUrl, request)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            return {
                title: data.title
            };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2RvLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsOEJBQXFDO0FBQ3JDLGlDQUErQjtBQUUvQixJQUFNLE1BQU0sR0FBRyxrREFBa0QsQ0FBQztBQUdsRTtJQUNJLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUU5QixDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7YUFDM0IsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ1AsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO2dCQUNwQixZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN0QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxpQ0FBTyxHQUFQLFVBQVEsSUFBWTtRQUNsQixJQUFJLE9BQU8sR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQzthQUNyQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDUCxNQUFNLENBQUM7Z0JBQ0gsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2FBQ3BCLENBQUM7UUFDSixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFHRCxzQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBbENNLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FFaUIsV0FBSTtPQURyQixlQUFlLENBbUMzQjtJQUFELHNCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7QUFuQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbmNvbnN0IGFwaVVybCA9IFwiaHR0cHM6Ly9oaWRkZW4td2F2ZS0zOTk3My5oZXJva3VhcHAuY29tL2FwaS90b2RvXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb0RvTGlzdFNlcnZpY2V7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG5cbiAgICB9XG5cbiAgICBnZXRBbGxUb0RvcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYXBpVXJsKVxuICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAubWFwKGRhdGEgPT4ge1xuICAgICAgICAgIGxldCBhY3Rpdml0eUxpc3QgPSBbXTtcbiAgICAgICAgICBkYXRhLmZvckVhY2goKGFjdGl2aXR5KSA9PiB7XG4gICAgICAgICAgICBhY3Rpdml0eUxpc3QucHVzaCh7XCJ0aXRsZVwiOiBhY3Rpdml0eS50aXRsZX0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBhY3Rpdml0eUxpc3Q7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgICB9XG5cbiAgICAgIGFkZFRvRG8obmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCByZXF1ZXN0ID0geyBcInRpdGxlXCI6IG5hbWUgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGFwaVVybCwgcmVxdWVzdClcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLm1hcChkYXRhID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB0aXRsZTogZGF0YS50aXRsZVxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgICB9XG5cbiAgICBcbiAgICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICAgIH1cbn0iXX0=