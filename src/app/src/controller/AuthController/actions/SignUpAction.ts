import {Component} from "angular2/core";

import {AuthService} from "../../../service/AuthService";
import {Router} from "angular2/router";

@Component({
    template: require('./../../../view/auth/sign-up.template.html')
})
export class SignUpAction
{
    private email: string = '';
    private password: string = '';

    constructor(private auth: AuthService, private router: Router) {}

    submit() {
        this.auth.signUp(this.email, this.password);
        this.router.navigate(['/TODO'])
    }
}