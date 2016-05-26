import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {SignInAction} from "./actions/SignInAction";
import {SignUpAction} from "./actions/SignUpAction";
import {SignOutAction} from "./actions/SignOutAction";

@Component({
    template: '<router-outlet>',
    directives: [
        ROUTER_DIRECTIVES
    ]
})
@RouteConfig([
    {
        name: 'SignIn',
        path: '/sign-in',
        useAsDefault: true,
        component: SignInAction
    },
    {
        name: 'SignUp',
        path: '/sign-up',
        component: SignUpAction
    },
    {
        name: 'SignOut',
        path: '/sign-out',
        component: SignOutAction
    },
])
export class AuthController
{
}