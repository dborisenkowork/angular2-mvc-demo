import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {IndexAction} from "./actions/IndexAction";

@Component({
    template: '<router-outlet></router-outlet>',
    directives: [
        ROUTER_DIRECTIVES
    ]
})
@RouteConfig([
    {
        name: 'IndexIndex',
        path: '/index',
        useAsDefault: true,
        component: IndexAction
    }
])
export class IndexController
{
}