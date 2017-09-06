import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

const apiUrl = "https://hidden-wave-39973.herokuapp.com/api/todo";

@Injectable()
export class ToDoListService{
    constructor(private http: Http) {

    }

    getAllToDos() {
        return this.http.get(apiUrl)
        .map(res => res.json())
        .map(data => {
          let activityList = [];
          data.Result.forEach((activity) => {
            activityList.push({"title": activity.title});
          });
          console.log("about to return");
          return activityList;
        })
        .catch(this.handleErrors);
      }
    
      handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
      }
}