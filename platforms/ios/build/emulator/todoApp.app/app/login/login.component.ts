import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: "login/login.component.html"
})

export class LoginComponent {
    constructor(private router: Router) {

    }
    
    submit() {
        this.router.navigate(["/list"]);
    }
}