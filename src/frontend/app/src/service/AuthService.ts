import {Injectable} from "angular2/core";
import {Cookie} from 'ng2-cookies/ng2-cookies';

@Injectable()
export class AuthService
{
    static COOKIE_KEY = 'api-key';

    private token: AuthToken;

    constructor() {
        if(Cookie.get(AuthService.COOKIE_KEY)) {
            this.token = new AuthToken(AuthService.COOKIE_KEY);
        }
    }

    isAuthenticated() {
        return !!this.token;
    }

    getToken(): AuthToken {
        if(this.isAuthenticated()) {
            return this.token;
        }else{
            throw new Error('Not authenticated');
        }
    }

    signIn(email: string, password: string) {
        this.token = new AuthToken('someAPIKey');

        Cookie.set(AuthService.COOKIE_KEY, this.token.apiKey);
    }

    signUp(email: string, password: string) {
        this.token = new AuthToken('someAPIKey');

        Cookie.set(AuthService.COOKIE_KEY, this.token.apiKey);
    }

    signOut() {
        this.token = undefined;

        Cookie.delete(AuthService.COOKIE_KEY);
    }
}

class AuthToken
{
    constructor(public apiKey: string) {}
}