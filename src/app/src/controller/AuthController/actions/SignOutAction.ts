import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {AuthService} from "../../../service/AuthService";

@Component({
    template: require('./../../../view/auth/sign-out.template.html')
})
export class SignOutAction
{
    constructor(private auth: AuthService, private router: Router) {}

    yes() {
        this.auth.signOut();
        this.router.navigate(['/Index']);
    }

    no() {
        this.router.navigate(['/Index']);
    }
}