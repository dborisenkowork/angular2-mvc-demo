/// <reference path="./../typings/main.d.ts" />
/// <reference path="./../node_modules/angular2/typings/browser.d.ts" />

import 'es6-shim';
import 'es6-promise';
import 'reflect-metadata';
import 'rxjs/Rx';

require('zone.js');
require('./../node_modules/bootstrap/dist/css/bootstrap.min.css');

import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS} from "angular2/router";
import {CORE_DIRECTIVES} from "angular2/common";

import {IndexController} from "./src/controller/IndexController/IndexController";
import {TODOController} from "./src/controller/TODOController/TODOController";
import {bootstrap} from "angular2/platform/browser";
import {TaskRepository} from "./src/model/TaskRepository";
import {AuthController} from "./src/controller/AuthController/AuthController";
import {AuthService} from "./src/service/AuthService";

@Component({
    selector: 'mvc-app',
    template: require('./src/view/layout.html'),
    directives: [
        ROUTER_DIRECTIVES,
        CORE_DIRECTIVES,
    ],
    providers: [
        TaskRepository,
        AuthService,
    ]
})
@RouteConfig([
    {
        name: 'Index',
        path: '/index/...',
        useAsDefault: true,
        component: IndexController
    },
    {
        name: 'Auth',
        path: '/auth/...',
        component: AuthController
    },
    {
        name: 'TODO',
        path: '/todo/...',
        component: TODOController
    },
])
export class App
{
    constructor(private auth: AuthService) {}
}

document.addEventListener('DOMContentLoaded', () => {
    bootstrap(App, [
        ROUTER_PROVIDERS
    ]).catch((err) => {
        console.log(err.message);
    });
});