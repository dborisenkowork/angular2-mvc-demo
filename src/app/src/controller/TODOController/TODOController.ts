import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {IndexAction} from "./actions/IndexAction";
import {AddAction} from "./actions/AddAction";
import {EditAction} from "./actions/EditAction";
import {DeleteAction} from "./actions/DeleteAction";
import {AuthService} from "../../service/AuthService";

@Component({
    template: '<router-outlet></router-outlet>',
    directives: [
        ROUTER_DIRECTIVES
    ]
})
@RouteConfig([
    {
        name: 'Index',
        path: '/index',
        useAsDefault: true,
        component: IndexAction
    },
    {
        name: 'Add',
        path: '/add',
        component: AddAction
    },
    {
        name: 'Edit',
        path: '/edit/:id',
        component: EditAction
    },
    {
        name: 'Delete',
        path: '/delete/:id',
        component: DeleteAction
    }
])
export class TODOController
{
    constructor(private authService: AuthService, private router: Router) {
        if(! authService.isAuthenticated()) {
            router.navigate(['/Auth/SignIn']);
        }
    }
}